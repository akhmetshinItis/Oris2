namespace RaftNode.Models ;

    public class VoteRequest
    {
        public int Term { get; set; }
        public string CandidateId { get; set; }
    }