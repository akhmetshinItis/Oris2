using car_booking.Enums;

namespace car_booking.Models;

public class Car
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public decimal Price { get; set; }
    public TransmissionType Transmission { get; set; }
    public CarType Type { get; set; }
    
    public int Liters { get; set; }

    public string Image { get; set; } = default!;
    
    public int Spaces { get; set; }
}

/*
id: 1,
   name: "Suzuki Swift (1)",
   category: "Hatchback",
   img: "/src/assets/suzuki_swift_1.png",
   liters: 37,
   transmission: "Manual",
   spaces: 5,
   price: 30.00,
   description: "The base model of the Suzuki Swift is perfect for urban driving. With a fuel-efficient engine and a compact design, it offers excellent maneuverability in city traffic. The manual transmission ensures a sporty driving experience, while the spacious interior provides comfort for all passengers."
*/