using HtmlAgilityPack;
using Parser.Services.ParsingService;

namespace FuckApi ;

    public class ParsingService : IParsingService
    {
        public async Task<string> Parse()
        {
            HttpClient httpClient = new();

            string url = "https://steamcommunity.com/market/search?q=&category_570_Hero%5B%5D=tag_npc_dota_hero_axe&category_570_Slot%5B%5D=any&category_570_Type%5B%5D=any&appid=570";
            string html = await httpClient.GetStringAsync(url);
            
            var doc = new HtmlDocument();
            doc.LoadHtml(html);
            var articles = doc.DocumentNode.SelectNodes("//*[@id=\"result_0\"]");
            
            foreach (var article in articles)
            {
                Console.WriteLine("-------- New article ---------");
                Console.WriteLine(article.InnerHtml);
            }
            return "";
        }
    }

    public class Card
    {
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public string Game { get; set; }
        public string price { get; set; }
        public string Amount { get; set; }
    }