using car_booking.Entities;
using car_booking.Enums;
using Microsoft.OpenApi.Extensions;

namespace car_booking.Models ;

    public class CarVm
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public string Transmission { get; set; }
        public string Type { get; set; }
    
        public int Liters { get; set; }

        public string Image { get; set; } = default!;
    
        public int Spaces { get; set; }

        public CarVm(Car car)
        {
            Id = car.Id;
            Name = car.Name;
            Description = car.Description;
            Price = car.Price;
            Transmission = car.Transmission.GetDisplayName();
            Type = car.Type.GetDisplayName();
            Liters = car.Liters;
            Spaces = car.Spaces;
            Image = car.Image;
        }
    }