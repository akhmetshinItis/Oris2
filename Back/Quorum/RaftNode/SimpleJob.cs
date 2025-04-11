using Quartz;

public class SimpleJob : IJob
{
    private readonly RaftService _raftService;

    public SimpleJob(RaftService raftService)
    {
        _raftService = raftService;
    }

    public async Task Execute(IJobExecutionContext context)
    {
        var actionName = context.JobDetail.JobDataMap.GetString("action");

        switch (actionName)
        {
            case "electionAction":
                await _raftService.StartElection();
                break;
            case "heartbeatAction":
                await _raftService.SendHeartbeat();
                break;
            default:
                throw new ArgumentException($"Unknown action: {actionName}");
        }
    }
}