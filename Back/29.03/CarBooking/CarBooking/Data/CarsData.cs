using CarBooking.Models;
using CarBooking.Enums;

namespace CarBooking.Data
{
    public static class CarsData
    {
        public static List<Car> Cars = new List<Car>{
            new Car{Id = 1, Name = "Lada Niva", Category = CategoryEnum.Sport, Img = "", Transmission = TransmissionEnum.Manual, Spaces = 3, Price = 99},
            new Car{Id = 2 , Name = "Lada Granta", Category = CategoryEnum.SUV, Img = "", Transmission = TransmissionEnum.Automatic, Spaces = 5, Price = 100 },
        };

        public static List<Comment> Comments = new List<Comment>
        {
            new Comment{Id = 1 , Name = "Tagir Akhmetshin", Position = "Senior Developer", Text = "Она утром режет манго", Rating= 5, Date = DateTime.Parse("20-04-2025"),  Img = "", CarId = 1},
            new Comment{Id = 2 , Name = "Tagir", Position = "Senior Developer", Text = "Она утром режет манго", Rating= 5, Date = DateTime.Parse("20-04-2025"),  Img = "", CarId = 2},
            new Comment{Id = 3 , Name = "Akhmetshin", Position = "Senior Developer", Text = "Она утром режет манго", Rating= 5, Date = DateTime.Parse("20-04-2025"),  Img = "", CarId = 1},
            new Comment{Id = 4 , Name = "Tagir Akh", Position = "Senior Developer", Text = "Она утром режет манго", Rating= 5, Date = DateTime.Parse("20-04-2025"),  Img = "", CarId = 2},

        };
    }
}
