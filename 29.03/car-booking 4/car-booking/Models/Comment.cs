namespace car_booking.Models ;

    public class Comment
    {
        public int Id { get; set; }
        public string Name { get; set; } = default!;
        public string Position { get; set; } = default!;
        public string Text { get; set; } = default!;
        public int Rating { get; set; }
        public int CarId { get; set; }
        public DateTime Date { get; set; }
        public string Img { get; set; } = default!;

    }