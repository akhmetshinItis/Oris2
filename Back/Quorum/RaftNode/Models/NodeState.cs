using System.Collections.Concurrent;

namespace RaftNode.Models ;

    public class NodeState
    {
        public RaftState CurrentState { get; set; } = RaftState.Follower;
        public int CurrentTerm { get; set; } = 0;
        public string LeaderId { get; set; } = null;
        public ConcurrentDictionary<string, string> DataStore { get; set; } = new();
    }