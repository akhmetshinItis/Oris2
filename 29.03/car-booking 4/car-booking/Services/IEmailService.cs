using car_booking.Models;
using MailKit.Net.Smtp;
using MimeKit;

namespace car_booking.Services ;

    public interface IEmailService
    {
        public Task SendEmailAsync(string email, string subject, string content);
        
        public Task LogEmail(EmailRequest emailRequest);
        
        public Task SendMessage(MimeMessage message);
    }