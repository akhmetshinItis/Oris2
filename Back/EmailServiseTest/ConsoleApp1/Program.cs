// See https://aka.ms/new-console-template for more information

using MailKit.Net.Smtp;
using MimeKit;

void SendEmailAsync(string email, string subject, string content)
    {
        var message = new MimeMessage();
        message.From.Add(new MailboxAddress("akhmetshin.itis@yandex.ru", "akhmetshin.itis@yandex.ru"));
        message.To.Add(new MailboxAddress(email, email));
        message.Subject = subject;
        message.Body = new TextPart("plain")
        {
            Text = content
        };

        using (var client = new SmtpClient())
        {
            client.CheckCertificateRevocation = false;
            client.Connect("smtp.yandex.ru", 465, true);
             client.Authenticate("akhmetshin.itis@yandex.ru", "uyoetraikhopvvte");
             client.Send(message);
             client.Disconnect(true);
        }
    }
    
    SendEmailAsync("tagir.a_2005@mail.ru", "123", "123");