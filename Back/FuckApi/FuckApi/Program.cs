using FuckApi;
using Parser.Services.ParsingService;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
    builder.Services.AddOpenApi();
    builder.Services.AddControllers();
    builder.Services.AddSwaggerGen();

    builder.Services.AddScoped<IParsingService, ParsingService>();
    var app = builder.Build();

// Configure the HTTP request pipeline.
    if (app.Environment.IsDevelopment())
    {
        app.MapOpenApi();
        app.UseSwagger();
        app.UseSwaggerUI();
    }

    app.UseHttpsRedirection();

    app.MapGet("/", () => "Hello World!");

    app.MapControllers();

    app.Run();