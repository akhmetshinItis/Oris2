using CarBooking.Enums;

namespace CarBooking.Models ;

    public class CarModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public decimal Price { get; set; }
        public TransmissionsEnum Transmissions { get; set; }
        public TypeEnum Type { get; set; }
    }