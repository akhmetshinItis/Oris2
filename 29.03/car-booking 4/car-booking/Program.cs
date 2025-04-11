using car_booking.Extensions;
using car_booking.Persistence;
using car_booking.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

    builder.Services.AddOpenApi();
    builder.Services.AddControllers();
    builder.Services.AddSwaggerGen();

    var configuration = builder.Configuration;
    builder.Services.AddSingleton<IConfiguration>(configuration);
    builder.Services.AddTransient<IEmailService, EmailService>();
    builder.Services.AddScoped<EmailSettings>();
    builder.Services.AddDbContext<ApplicationDbContext>(options =>
        options.UseNpgsql(configuration.GetConnectionString("DefaultConnection")));

    var app = builder.Build();
// Configure the HTTP request pipeline.
    if (app.Environment.IsDevelopment())
    {
        app.MapOpenApi();
        app.UseSwagger();
        app.UseSwaggerUI();
    }
    app.MapGet("/", () => "Hello World!");
    app.UseCors(builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
    app.MapControllers();

    app.Run();