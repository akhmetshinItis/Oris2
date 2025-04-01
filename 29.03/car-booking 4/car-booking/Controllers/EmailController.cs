using car_booking.Models;
using car_booking.Services;
using Microsoft.AspNetCore.Mvc;

namespace car_booking.Controllers ;

    [ApiController]
    [Route("[controller]")]
    public class EmailController : ControllerBase
    {
        private readonly IEmailService _emailService;
        public EmailController(IEmailService emailService)
        {
            _emailService = emailService;
        }
        [HttpPost]
        public IActionResult SendEmail([FromForm] EmailRequest request)
        {
            var subject = "Заявка на аренду обработана успешно";
            var body = "АХАХХАХА ТЫ ЛОХ ВНАТУРЕ \ud83d\ude08\ud83d\ude08\ud83d\ude08";
            _emailService.SendEmailAsync(request.Email, subject, body);
            _emailService.LogEmail(request);
            return Ok();
        }
    }