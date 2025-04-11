namespace RaftNode.Models ;

    public class VoteResponse
    {
        public int Term { get; set; }
        public bool VoteGranted { get; set; }
    }