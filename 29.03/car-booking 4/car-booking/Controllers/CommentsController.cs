using car_booking.DataSeeds;
using car_booking.Models;
using Microsoft.AspNetCore.Mvc;

namespace car_booking.Controllers ;

    [ApiController]
    [Route("[controller]")]
    public class CommentsController : ControllerBase
    {
        [HttpGet("GetCarComments/{id:int}")]
        public IEnumerable<Comment> GetCarComments([FromRoute] int id)
            => Seed.Comments.Where(x => x.CarId == id);
    }