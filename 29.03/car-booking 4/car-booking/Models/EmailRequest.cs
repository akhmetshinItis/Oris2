namespace car_booking.Models ;

    public class EmailRequest
    {
        public string Name { get; set; }
        public string Email { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string CityPick { get; set; }
        public string DatePick { get; set; }
        public string TimePick { get; set; }
        public string CityDrop { get; set; }
        public string TimeDrop { get; set; }
        public string CardNumber { get; set; }
        public string CardDate { get; set; }
        public string CardHolder { get; set; }
        public string CardCvc { get; set; }
        public string SendNews { get; set; }
        public string PrivacyPolicy { get; set; }
    }