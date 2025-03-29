using car_booking.DataSeeds;
using car_booking.Enums;
using car_booking.Extensions;
using car_booking.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;

namespace car_booking.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CarsController : ControllerBase
{
    public CarsController()
    {
    }

    [HttpGet("GetById/{id:int}")]
    public ActionResult<CarVm?> GetCarById([FromRoute] int id)
        => Ok(new CarVm(
            Seed.Cars.FirstOrDefault(x => x.Id == id)
            ?? throw new Exception($"Car with id {id} not found.")));

    [HttpGet("GetAll")]
    public ActionResult<IEnumerable<CarVm>> GetAll()
        => Ok(Seed.Cars.Select(x => new CarVm(x)));
        
    [HttpGet("GetFiltered")]
    public IEnumerable<Car>? GetFiltered(
        string? name,
        decimal? price,
        int? liters,
        int? spaces,
        TransmissionType? transmissionType,
        CarType? carType)
        => Seed.Cars
            .WhereIfNotNull(name, x => x.Name == name)
            .WhereIfNotNull(price, p => p.Price == price)
            .WhereIfNotNull(liters, x => x.Liters == liters)
            .WhereIfNotNull(spaces, x => x.Spaces == spaces)
            .WhereIfNotNull(transmissionType, x => x.Transmission == transmissionType)
            .WhereIfNotNull(carType, x => x.Type == carType);
}