using RaftNode.Models;

public class RaftService
{
    private readonly NodeState _nodeState;
    private readonly HttpClient _httpClient;
    private readonly List<string> _otherNodes;

    public RaftService(NodeState nodeState, HttpClient httpClient, IConfiguration configuration)
    {
        _nodeState = nodeState;
        _httpClient = httpClient;
        _otherNodes = configuration["OTHER_NODES"].Split(',').ToList();
    }

    public NodeState GetState() => _nodeState;

    public bool IsLeader() => _nodeState.CurrentState == RaftState.Leader;

    public async Task StartElection()
    {
        _nodeState.CurrentState = RaftState.Candidate;
        _nodeState.CurrentTerm++;
        var votesReceived = 1; // Голос за самого себя

        foreach (var node in _otherNodes)
        {
            var request = new VoteRequest
            {
                Term = _nodeState.CurrentTerm,
                CandidateId = "self"
            };

            try
            {
                var response = await _httpClient.PostAsJsonAsync($"{node}/api/raft/vote", request);
                if (response.IsSuccessStatusCode)
                {
                    var voteResponse = await response.Content.ReadFromJsonAsync<VoteResponse>();
                    if (voteResponse.VoteGranted)
                    {
                        votesReceived++;
                    }
                }
            }
            catch
            {
                // Нода недоступна
            }
        }

        if (votesReceived > _otherNodes.Count / 2)
        {
            _nodeState.CurrentState = RaftState.Leader;
            _nodeState.LeaderId = "self";
        }
        else
        {
            _nodeState.CurrentState = RaftState.Follower;
        }
    }

    public async Task SendHeartbeat()
    {
        if (_nodeState.CurrentState != RaftState.Leader)
        {
            return;
        }

        foreach (var node in _otherNodes)
        {
            var request = new AppendEntries
            {
                Term = _nodeState.CurrentTerm,
                LeaderId = "self"
            };

            try
            {
                await _httpClient.PostAsJsonAsync($"{node}/api/raft/append", request);
            }
            catch
            {
                // Нода недоступна
            }
        }
    }

    public VoteResponse HandleVoteRequest(VoteRequest request)
    {
        if (request.Term > _nodeState.CurrentTerm)
        {
            _nodeState.CurrentTerm = request.Term;
            _nodeState.CurrentState = RaftState.Follower;
        }

        var voteGranted = request.Term >= _nodeState.CurrentTerm;
        return new VoteResponse { Term = _nodeState.CurrentTerm, VoteGranted = voteGranted };
    }

    public bool HandleAppendEntries(AppendEntries request)
    {
        if (request.Term < _nodeState.CurrentTerm)
        {
            return false;
        }

        _nodeState.CurrentTerm = request.Term;
        _nodeState.CurrentState = RaftState.Follower;
        return true;
    }

    public void WriteData(string key, string value)
    {
        _nodeState.DataStore[key] = value;
    }

    public bool TryReadData(string key, out string value)
    {
        return _nodeState.DataStore.TryGetValue(key, out value);
    }
}