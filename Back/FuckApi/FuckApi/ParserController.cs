using Microsoft.AspNetCore.Mvc;
using Parser.Services.ParsingService;

namespace FuckApi ;

    [ApiController]
    public class ParserController : ControllerBase
    {
        private readonly IParsingService _parsingService;

        public ParserController(IParsingService parsingService)
        {
            _parsingService = parsingService;
        }

        [HttpGet("api/v1/parser")]
        public async Task<IActionResult> Parse(int pageNumber, int pageSize)
        {
            var result = await _parsingService.Parse(pageNumber, pageSize);
            return Ok(result);
        }
    }