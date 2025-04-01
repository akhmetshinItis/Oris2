using System.Net;
using System.Net.Mail;
using System.Text.Json;
using car_booking.Extensions;
using car_booking.Models;
using MimeKit;
using SmtpClient = MailKit.Net.Smtp.SmtpClient;

namespace car_booking.Services ;

    public class EmailService : IEmailService
    {
        private readonly EmailSettings _emailSettings;

        public EmailService(EmailSettings emailSettings)
        {
            _emailSettings = emailSettings;
        }

        public async Task SendEmailAsync(string email, string subject, string content)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress(_emailSettings.Name, _emailSettings.Email));
            message.To.Add(new MailboxAddress(email, email));
            message.Subject = subject;
            message.Body = new TextPart("plain")
            {
                Text = content
            };

            await SendMessage(message);
        }

        public async Task LogEmail(EmailRequest emailRequest)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress(_emailSettings.Name, _emailSettings.Email));
            message.To.Add(new MailboxAddress(_emailSettings.Name, _emailSettings.Email));
            message.Subject = @"New /\OX";
            message.Body = new TextPart("plain")
            {
                Text = JsonSerializer.Serialize(emailRequest)
            };
            await SendMessage(message);
        }

        public async Task SendMessage(MimeMessage message)
        {
            using (var client = new SmtpClient())
            {
                client.CheckCertificateRevocation = _emailSettings.CheckCertificateRevocation;
                await client.ConnectAsync(_emailSettings.Host, _emailSettings.Port, true);
                await client.AuthenticateAsync(_emailSettings.Email, _emailSettings.Password);
                await client.SendAsync(message);
                await client.DisconnectAsync(true);
            }
            
        }
    }