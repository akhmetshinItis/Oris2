using Quartz;
using Quartz.Impl;
using RaftNode.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
    builder.Services.AddSingleton<NodeState>();
    builder.Services.AddHttpClient();
    builder.Services.AddSingleton<RaftService>();
    builder.Services.AddSingleton<ISchedulerFactory, StdSchedulerFactory>();
    builder.Services.AddSingleton<QuartzScheduler>();

    builder.Services.AddControllers();

    var app = builder.Build();

// Configure the HTTP request pipeline.
    app.MapControllers();

    var nodeState = app.Services.GetRequiredService<NodeState>();
    var raftService = app.Services.GetRequiredService<RaftService>();
    var quartzScheduler = app.Services.GetRequiredService<QuartzScheduler>();
    await quartzScheduler.StartElectionTimer(() => raftService.StartElection());
    await quartzScheduler.StartHeartbeatTimer(() => raftService.SendHeartbeat());

    app.Run();