using CarBooking.Enums;

namespace CarBooking.Models
{
    public class Car
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public CategoryEnum Category { get; set; }

        public string Img { get; set; }
        public TransmissionEnum Transmission { get; set; }

        public int Spaces { get; set; }
        public decimal Price { get; set; }
    }
}
