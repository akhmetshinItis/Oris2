using FuckApi;

namespace Parser.Services.ParsingService ;

    public interface IParsingService
    {
        Task<List<Card>> Parse(int pageNumber, int pageSize);
    }