namespace CarBooking.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Position { get; set; }
        public string Text { get; set; }
        public int Rating { get; set; }

        public int CarId { get; set; }

        public DateTime Date { get; set; }
        public string Img { get; set; }

    }
}
