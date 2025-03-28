using CarBooking.Data;
using CarBooking.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarBooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentsController : ControllerBase
    {

        [HttpGet("GetCarComment")]
        public IEnumerable<Comment> Get(int id)
            => CarsData.Comments.Where(x => x.CarId == id);
    }
}
