using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace carbooking.Migrations
{
    /// <inheritdoc />
    public partial class AddData : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Cars",
                columns: new[] { "Id", "Description", "Image", "Liters", "Name", "Price", "Spaces", "Transmission", "Type" },
                values: new object[,]
                {
                    { 1, "Базовая комплектация с механической КПП, кондиционер, ABS", "https://carso.ru/uploads/stock_cars/168/1477/images/chevrolet_aveo_sedan_6.png", 45, "Chevrolet Aveo LS MT", 1050000m, 5, 0, 2 },
                    { 2, "Автоматическая коробка, климат-контроль, мультимедиа", "https://carso.ru/uploads/stock_cars/168/1477/images/chevrolet_aveo_sedan_6.png", 45, "Chevrolet Aveo LT AT", 1250000m, 5, 1, 2 },
                    { 3, "Топовая версия с кожаным салоном и системой безопасности", "https://carso.ru/uploads/stock_cars/168/1477/images/chevrolet_aveo_sedan_6.png", 45, "Chevrolet Aveo Premier", 1450000m, 5, 1, 2 },
                    { 4, "Классический внедорожник с полным приводом", "https://kazan.masmotors.ru/colors/chevrolet-niva/3.png", 58, "Chevrolet Niva 1.7 MT", 1222000m, 5, 0, 0 },
                    { 5, "Городская версия с улучшенным комфортом", "https://kazan.masmotors.ru/colors/chevrolet-niva/3.png", 58, "Chevrolet Niva Urban", 1350000m, 5, 0, 0 },
                    { 6, "Специальная серия с дополнительной защитой", "https://kazan.masmotors.ru/colors/chevrolet-niva/3.png", 58, "Chevrolet Niva Legend", 1450000m, 5, 0, 0 },
                    { 7, "Базовый седан с механической КПП", "https://kazan.masmotors.ru/colors/chevrolet-cruze-sedan/4.png", 52, "Chevrolet Cruze LS", 1500000m, 5, 0, 2 },
                    { 8, "Автоматическая коробка, премиум-комплектация", "https://kazan.masmotors.ru/colors/chevrolet-cruze-sedan/4.png", 52, "Chevrolet Cruze LTZ", 1800000m, 5, 1, 2 },
                    { 9, "Топовая версия с полным пакетом опций", "https://kazan.masmotors.ru/colors/chevrolet-cruze-sedan/4.png", 52, "Chevrolet Cruze Premier", 2100000m, 5, 1, 2 },
                    { 10, "Базовый полноразмерный внедорожник", "https://wallpapers.com/images/hd/white-chevrolet-tahoe-s-u-v-profile-hxxci41yvgrn2kxs.jpg", 98, "Chevrolet Tahoe LS", 6500000m, 7, 1, 0 },
                    { 11, "Люксовая версия с расширенным оснащением", "https://wallpapers.com/images/hd/white-chevrolet-tahoe-s-u-v-profile-hxxci41yvgrn2kxs.jpg", 98, "Chevrolet Tahoe LTZ", 7800000m, 7, 1, 0 },
                    { 12, "Топовая комплектация с технологиями премиум-класса", "https://wallpapers.com/images/hd/white-chevrolet-tahoe-s-u-v-profile-hxxci41yvgrn2kxs.jpg", 98, "Chevrolet Tahoe Premier", 8500000m, 7, 1, 0 },
                    { 13, "Семейный кроссовер базовой комплектации", "https://chevrolet.uz/assets/images/traverse/colors/2.png", 85, "Chevrolet Traverse LS", 4200000m, 7, 1, 0 },
                    { 14, "Улучшенная версия с дополнительными опциями", "https://chevrolet.uz/assets/images/traverse/colors/2.png", 85, "Chevrolet Traverse LT", 4800000m, 7, 1, 0 },
                    { 15, "Премиум комплектация с полным приводом", "https://chevrolet.uz/assets/images/traverse/colors/2.png", 85, "Chevrolet Traverse Premier", 5500000m, 7, 1, 0 },
                    { 16, "Бизнес-седан базовой комплектации", "https://carforma.ru/files/images/wmarks/d7823bb0d19e6429f410250999bdee95.png", 60, "Chevrolet Malibu LS", 2300000m, 5, 1, 2 },
                    { 17, "Улучшенная версия с дополнительным оснащением", "https://carforma.ru/files/images/wmarks/d7823bb0d19e6429f410250999bdee95.png", 60, "Chevrolet Malibu LT", 2600000m, 5, 1, 2 },
                    { 18, "Топовая версия с премиальным интерьером", "https://carforma.ru/files/images/wmarks/d7823bb0d19e6429f410250999bdee95.png", 60, "Chevrolet Malibu Premier", 3000000m, 5, 1, 2 },
                    { 19, "Компактный кроссовер базовой версии", "https://выхлоп43.рф/assets/cache_image/resources/404/shevrolet-captiva_500x0_82c.png", 70, "Chevrolet Captiva LS", 2800000m, 5, 1, 0 },
                    { 20, "Средняя комплектация с полным приводом", "https://выхлоп43.рф/assets/cache_image/resources/404/shevrolet-captiva_500x0_82c.png", 70, "Chevrolet Captiva LT", 3200000m, 5, 1, 0 },
                    { 21, "Топовая версия с расширенными возможностями", "https://выхлоп43.рф/assets/cache_image/resources/404/shevrolet-captiva_500x0_82c.png", 70, "Chevrolet Captiva Premier", 3600000m, 5, 1, 0 },
                    { 22, "Семейный минивэн базовой комплектации", "https://storage.yandexcloud.net/cdn.carso.ru/uploads/new_car/175/colors/image_634.png", 65, "Chevrolet Orlando LS", 2100000m, 7, 0, 1 },
                    { 23, "Автоматическая коробка, улучшенный комфорт", "https://storage.yandexcloud.net/cdn.carso.ru/uploads/new_car/175/colors/image_634.png", 65, "Chevrolet Orlando LT", 2400000m, 7, 1, 1 },
                    { 24, "Премиум версия с мультимедийным комплексом", "https://storage.yandexcloud.net/cdn.carso.ru/uploads/new_car/175/colors/image_634.png", 65, "Chevrolet Orlando Premier", 2800000m, 7, 1, 1 },
                    { 25, "Спортивное купе с двигателем V6", "https://pngicon.ru/file/uploads/avto_camaro.png", 120, "Chevrolet Camaro LT", 5500000m, 4, 1, 3 },
                    { 26, "Мощная версия с двигателем V8", "https://pngicon.ru/file/uploads/avto_camaro.png", 150, "Chevrolet Camaro SS", 6800000m, 4, 1, 3 },
                    { 27, "Топовая спортивная версия с суперчарджером", "https://pngicon.ru/file/uploads/avto_camaro.png", 180, "Chevrolet Camaro ZL1", 8200000m, 4, 1, 3 },
                    { 28, "Стильный кроссовер базовой комплектации", "https://di-uploads-pod2.dealerinspire.com/bobsteelechevy/uploads/2022/06/mlp-img-top-2022-blazer.png", 90, "Chevrolet Blazer LS", 3900000m, 5, 1, 0 },
                    { 29, "Спортивная версия с улучшенными характеристиками", "https://di-uploads-pod2.dealerinspire.com/bobsteelechevy/uploads/2022/06/mlp-img-top-2022-blazer.png", 90, "Chevrolet Blazer RS", 4500000m, 5, 1, 0 },
                    { 30, "Топовая комплектация с полным пакетом опций", "https://di-uploads-pod2.dealerinspire.com/bobsteelechevy/uploads/2022/06/mlp-img-top-2022-blazer.png", 90, "Chevrolet Blazer Premier", 5200000m, 5, 1, 0 }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 6);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 7);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 8);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 9);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 10);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 13);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 14);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 15);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 16);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 17);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 18);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 19);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 20);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 21);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 22);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 23);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 24);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 25);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 26);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 27);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 28);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 29);

            migrationBuilder.DeleteData(
                table: "Cars",
                keyColumn: "Id",
                keyValue: 30);
        }
    }
}
