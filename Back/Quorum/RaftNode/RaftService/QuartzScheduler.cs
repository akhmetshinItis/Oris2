using Quartz;

public class QuartzScheduler
{
    private readonly IScheduler _scheduler;

    public QuartzScheduler(IScheduler scheduler)
    {
        _scheduler = scheduler;
    }

    public async Task StartElectionTimer(Func<Task> electionAction)
    {
        var job = JobBuilder.Create<SimpleJob>()
            .UsingJobData("action", "electionAction")
            .Build();

        var trigger = TriggerBuilder.Create()
            .StartNow()
            .WithSimpleSchedule(x => x.WithIntervalInSeconds(5).RepeatForever())
            .Build();

        await _scheduler.ScheduleJob(job, trigger);
    }

    public async Task StartHeartbeatTimer(Func<Task> heartbeatAction)
    {
        var job = JobBuilder.Create<SimpleJob>()
            .UsingJobData("action", "heartbeatAction")
            .Build();

        var trigger = TriggerBuilder.Create()
            .StartNow()
            .WithSimpleSchedule(x => x.WithIntervalInSeconds(2).RepeatForever())
            .Build();

        await _scheduler.ScheduleJob(job, trigger);
    }
}