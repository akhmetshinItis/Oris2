namespace RaftNode.Models ;

    public enum RaftState
    {
        Follower,
        Candidate,
        Leader
    }