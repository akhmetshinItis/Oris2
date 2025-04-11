using Microsoft.AspNetCore.Mvc;

namespace ApiGateway ;

    [ApiController]
    [Route("gateway")]
    public class GatewayController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _leaderUrl;

        public GatewayController(HttpClient httpClient, IConfiguration configuration)
        {
            _httpClient = httpClient;
            _leaderUrl = configuration["LeaderUrl"];
        }

        [HttpPost("data")]
        public async Task<IActionResult> WriteData([FromBody] KeyValuePair<string, string> data)
        {
            var response = await _httpClient.PostAsJsonAsync($"{_leaderUrl}/api/raft/data", data);
            return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
        }

        [HttpGet("data/{key}")]
        public async Task<IActionResult> ReadData(string key)
        {
            var response = await _httpClient.GetAsync($"{_leaderUrl}/api/raft/data/{key}");
            return StatusCode((int)response.StatusCode, await response.Content.ReadAsStringAsync());
        }
    }