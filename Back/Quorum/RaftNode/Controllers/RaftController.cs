using Microsoft.AspNetCore.Mvc;
using RaftNode.Models;

[ApiController]
[Route("api/[controller]")]
public class RaftController : ControllerBase
{
    private readonly RaftService _raftService;

    public RaftController(RaftService raftService)
    {
        _raftService = raftService;
    }

    [HttpGet("state")]
    public IActionResult GetState()
    {
        return Ok(_raftService.GetState());
    }

    [HttpPost("vote")]
    public IActionResult RequestVote([FromBody] VoteRequest request)
    {
        var response = _raftService.HandleVoteRequest(request);
        return Ok(response);
    }

    [HttpPost("append")]
    public IActionResult AppendEntries([FromBody] AppendEntries request)
    {
        var success = _raftService.HandleAppendEntries(request);
        return Ok(new { Success = success });
    }

    [HttpPost("data")]
    public IActionResult WriteData([FromBody] KeyValuePair<string, string> data)
    {
        if (!_raftService.IsLeader())
        {
            return StatusCode(403, "Only leader can accept write requests.");
        }

        _raftService.WriteData(data.Key, data.Value);
        return Ok("Data written successfully.");
    }

    [HttpGet("data/{key}")]
    public IActionResult ReadData(string key)
    {
        if (_raftService.TryReadData(key, out var value))
        {
            return Ok(value);
        }

        return NotFound("Key not found.");
    }
}