namespace RaftNode.Models ;

    public class AppendEntries
    {
        public int Term { get; set; }
        public string LeaderId { get; set; }
    }