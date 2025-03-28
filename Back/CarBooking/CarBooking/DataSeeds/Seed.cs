using CarBooking.Enums;
using CarBooking.Models;
// Шевроле 5 моделей
namespace CarBooking.DataSeeds ;

    public static class Seed
    {
        public static List<CarModel> CarModels = [
            new()
            {
                Id = 1,
                Name = "Kolya",
                Price = 1000,
                Transmissions = TransmissionsEnum.Automatic,
                Type = TypeEnum.Supercar
            },
            ];
    }