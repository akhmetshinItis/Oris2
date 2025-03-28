using CarBooking.Data;
using CarBooking.Enums;
using CarBooking.Models;
using Microsoft.AspNetCore.Mvc;

namespace CarBooking.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CarsController : ControllerBase
    {
        [HttpGet("GetCars")]
        public IEnumerable<Car> Get() 
            => CarsData.Cars;

        [HttpGet("GetCarById")]
        public Car? GetById(int id)
            => CarsData.Cars.FirstOrDefault(x => x.Id == id);

        [HttpGet("GetFilteredCars")]
        public IEnumerable<Car> Get(int? id, string? name, CategoryEnum? category, string? Img, TransmissionEnum? transmission, int? spaces, decimal? price   )
        {
            var result = CarsData.Cars.AsQueryable();

            if (id != null && id > 0)
                result = result.Where(i => i.Id == id);

            if (name != null)
                result = result.Where(i => i.Name == name);


            if (category != null)
                result = result.Where(i => i.Category == category);

            if (transmission != null)
                result = result.Where(i => i.Transmission == transmission);

            if (spaces != null)
                result = result.Where(i => i.Spaces == spaces);

            if (price != null)
                result = result.Where(i => i.Price == price);

            return result;  
        }
            


    }
}
