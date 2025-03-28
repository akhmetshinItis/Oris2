using System.Collections;
using CarBooking.DataSeeds;
using CarBooking.Models;
using Microsoft.AspNetCore.Mvc;

namespace CarBooking ;

    [ApiController]
    public class CarsController : ControllerBase
    {
        public CarsController()
        {
        }
        
        [HttpGet("api/GetById")]
        public CarModel? GetCarById([FromRoute] int id)
            => Seed.CarModels.FirstOrDefault(x => x.Id == id);

        [HttpGet("api/GetAll")]
        public IEnumerable<CarModel> GetAll()
            => Seed.CarModels;
        
        [HttpGet("api/GetFiltered")]
        public IEnumerable<CarModel>? GetFiltered(int? id, string? name)
         => Seed.CarModels
             .WhereIfNotNull(id, x => x.Id == id)
             .WhereIfNotNull(name, x => x.Name == name);
    }

    public static class EnumerableExtensions
    {
        public static IEnumerable<T> WhereIfNotNull<T, TValue>(
            this IEnumerable<T> source,
            TValue? filterValue,
            Func<T, bool> predicate)
        {
            return filterValue != null ? source.Where(predicate) : source;
        }
    }