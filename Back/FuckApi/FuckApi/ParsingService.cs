using HtmlAgilityPack;
using Parser.Services.ParsingService;

namespace FuckApi ;

    public class ParsingService : IParsingService
    {
        private readonly HttpClient httpClient = new();

        private readonly List<string> HeroNames = new()
        {
            "axe",
            "drow_ranger",
            "nyx_assassin"
        };

        public async Task<List<Card>> Parse(int pageNumber, int pageSize)
        {
            var cards = new List<Card>();
            var totalItemsNeeded = pageNumber * pageSize;
            var pagesPerHero = (int)Math.Ceiling((double)totalItemsNeeded / HeroNames.Count / 10);

            foreach (var hero in HeroNames)
                for (var page = 1; page <= pagesPerHero; page++)
                {
                    var url = page == 1
                        ? $"https://steamcommunity.com/market/search?q=&category_570_Hero%5B%5D=tag_npc_dota_hero_{hero}&category_570_Slot%5B%5D=any&category_570_Type%5B%5D=any&appid=570"
                        : $"https://steamcommunity.com/market/search?q=&category_570_Hero%5B%5D=tag_npc_dota_hero_{hero}&category_570_Slot%5B%5D=any&category_570_Type%5B%5D=any&appid=570#p{page}_popular_desc";

                    var heroCards = await ParsePage(url, hero);
                    cards.AddRange(heroCards);
                }

            var rnd = new Random();
            var shuffledCards = cards.OrderBy(x => rnd.Next()).ToList();

            return shuffledCards.Take(totalItemsNeeded).ToList();
        }

        private async Task<List<Card>> ParsePage(string url, string hero)
        {
            var pageCards = new List<Card>();

            var html = await httpClient.GetStringAsync(url);
            var doc = new HtmlDocument();
            doc.LoadHtml(html);

            var cardNodes =
                doc.DocumentNode.SelectNodes("//div[contains(@id, 'result_') and not(contains(@id, 'resultlink_'))]");

            foreach (var node in cardNodes)
            {
                var id = node.Id.Split('_')[1];
                var card = new Card
                {
                    ImageUrl = node.SelectSingleNode($"//*[@id=\"result_{id}_image\"]").Attributes["src"].Value,
                    Name = node.SelectSingleNode($".//span[@id='result_{id}_name']").InnerText.Trim(),
                    Game =
                        node.SelectSingleNode(".//span[contains(@class, 'market_listing_game_name')]").InnerText.Trim(),
                    Price =
                        node.SelectSingleNode(
                            ".//span[contains(@class, 'market_table_value')]/span[contains(@class, 'normal_price')]")
                            .InnerText.Trim(),
                    Amount =
                        node.SelectSingleNode(".//span[contains(@class, 'market_listing_num_listings')]").InnerText
                            .Trim(),
                    Hero = hero
                };
                
                pageCards.Add(card);
            }

            return pageCards;
        }
    }

    public class Card
    {
        public string Name { get; set; }
        public string ImageUrl { get; set; }
        public string Game { get; set; }
        public string Price { get; set; }
        public string Amount { get; set; }
        public string Hero { get; set; }
    }