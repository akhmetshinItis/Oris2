using car_booking.Entities;
using car_booking.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace car_booking.Persistence ;

    public class CarsConfiguration : IEntityTypeConfiguration<Car>
    {
        public void Configure(EntityTypeBuilder<Car> builder)
        {
            builder.HasData(new Car
            {
                Id = 1,
                Name = "Chevrolet Aveo LS MT",
                Type = CarType.Sedan,
                Image = "https://carso.ru/uploads/stock_cars/168/1477/images/chevrolet_aveo_sedan_6.png",
                Liters = 45,
                Transmission = TransmissionType.Manual,
                Spaces = 5,
                Price = 1_050_000m,
                Description = "Базовая комплектация с механической КПП, кондиционер, ABS"
            },
                new Car
                {
                    Id = 2,
                    Name = "Chevrolet Aveo LT AT",
                    Type = CarType.Sedan,
                    Image = "https://carso.ru/uploads/stock_cars/168/1477/images/chevrolet_aveo_sedan_6.png",
                    Liters = 45,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 5,
                    Price = 1_250_000m,
                    Description = "Автоматическая коробка, климат-контроль, мультимедиа"
                },
                new Car
                {
                    Id = 3,
                    Name = "Chevrolet Aveo Premier",
                    Type = CarType.Sedan,
                    Image = "https://carso.ru/uploads/stock_cars/168/1477/images/chevrolet_aveo_sedan_6.png",
                    Liters = 45,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 5,
                    Price = 1_450_000m,
                    Description = "Топовая версия с кожаным салоном и системой безопасности"
                },

                // 2. Chevrolet Niva
                new Car
                {
                    Id = 4,
                    Name = "Chevrolet Niva 1.7 MT",
                    Type = CarType.SUV,
                    Image = "https://kazan.masmotors.ru/colors/chevrolet-niva/3.png",
                    Liters = 58,
                    Transmission = TransmissionType.Manual,
                    Spaces = 5,
                    Price = 1_222_000m,
                    Description = "Классический внедорожник с полным приводом"
                },
                new Car
                {
                    Id = 5,
                    Name = "Chevrolet Niva Urban",
                    Type = CarType.SUV,
                    Image = "https://kazan.masmotors.ru/colors/chevrolet-niva/3.png",
                    Liters = 58,
                    Transmission = TransmissionType.Manual,
                    Spaces = 5,
                    Price = 1_350_000m,
                    Description = "Городская версия с улучшенным комфортом"
                },
                new Car
                {
                    Id = 6,
                    Name = "Chevrolet Niva Legend",
                    Type = CarType.SUV,
                    Image = "https://kazan.masmotors.ru/colors/chevrolet-niva/3.png",
                    Liters = 58,
                    Transmission = TransmissionType.Manual,
                    Spaces = 5,
                    Price = 1_450_000m,
                    Description = "Специальная серия с дополнительной защитой"
                },

                // 3. Chevrolet Cruze
                new Car
                {
                    Id = 7,
                    Name = "Chevrolet Cruze LS",
                    Type = CarType.Sedan,
                    Image = "https://kazan.masmotors.ru/colors/chevrolet-cruze-sedan/4.png",
                    Liters = 52,
                    Transmission = TransmissionType.Manual,
                    Spaces = 5,
                    Price = 1_500_000m,
                    Description = "Базовый седан с механической КПП"
                },
                new Car
                {
                    Id = 8,
                    Name = "Chevrolet Cruze LTZ",
                    Type = CarType.Sedan,
                    Image = "https://kazan.masmotors.ru/colors/chevrolet-cruze-sedan/4.png",
                    Liters = 52,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 5,
                    Price = 1_800_000m,
                    Description = "Автоматическая коробка, премиум-комплектация"
                },
                new Car
                {
                    Id = 9,
                    Name = "Chevrolet Cruze Premier",
                    Type = CarType.Sedan,
                    Image = "https://kazan.masmotors.ru/colors/chevrolet-cruze-sedan/4.png",
                    Liters = 52,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 5,
                    Price = 2_100_000m,
                    Description = "Топовая версия с полным пакетом опций"
                },

                // 4. Chevrolet Tahoe
                new Car
                {
                    Id = 10,
                    Name = "Chevrolet Tahoe LS",
                    Type = CarType.SUV,
                    Image = "https://wallpapers.com/images/hd/white-chevrolet-tahoe-s-u-v-profile-hxxci41yvgrn2kxs.jpg",
                    Liters = 98,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 7,
                    Price = 6_500_000m,
                    Description = "Базовый полноразмерный внедорожник"
                },
                new Car
                {
                    Id = 11,
                    Name = "Chevrolet Tahoe LTZ",
                    Type = CarType.SUV,
                    Image = "https://wallpapers.com/images/hd/white-chevrolet-tahoe-s-u-v-profile-hxxci41yvgrn2kxs.jpg",
                    Liters = 98,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 7,
                    Price = 7_800_000m,
                    Description = "Люксовая версия с расширенным оснащением"
                },
                new Car
                {
                    Id = 12,
                    Name = "Chevrolet Tahoe Premier",
                    Type = CarType.SUV,
                    Image = "https://wallpapers.com/images/hd/white-chevrolet-tahoe-s-u-v-profile-hxxci41yvgrn2kxs.jpg",
                    Liters = 98,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 7,
                    Price = 8_500_000m,
                    Description = "Топовая комплектация с технологиями премиум-класса"
                },

                // 5. Chevrolet Traverse
                new Car
                {
                    Id = 13,
                    Name = "Chevrolet Traverse LS",
                    Type = CarType.SUV,
                    Image = "https://chevrolet.uz/assets/images/traverse/colors/2.png",
                    Liters = 85,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 7,
                    Price = 4_200_000m,
                    Description = "Семейный кроссовер базовой комплектации"
                },
                new Car
                {
                    Id = 14,
                    Name = "Chevrolet Traverse LT",
                    Type = CarType.SUV,
                    Image = "https://chevrolet.uz/assets/images/traverse/colors/2.png",
                    Liters = 85,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 7,
                    Price = 4_800_000m,
                    Description = "Улучшенная версия с дополнительными опциями"
                },
                new Car
                {
                    Id = 15,
                    Name = "Chevrolet Traverse Premier",
                    Type = CarType.SUV,
                    Image = "https://chevrolet.uz/assets/images/traverse/colors/2.png",
                    Liters = 85,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 7,
                    Price = 5_500_000m,
                    Description = "Премиум комплектация с полным приводом"
                },

                // 6. Chevrolet Malibu
                new Car
                {
                    Id = 16,
                    Name = "Chevrolet Malibu LS",
                    Type = CarType.Sedan,
                    Image = "https://carforma.ru/files/images/wmarks/d7823bb0d19e6429f410250999bdee95.png",
                    Liters = 60,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 5,
                    Price = 2_300_000m,
                    Description = "Бизнес-седан базовой комплектации"
                },
                new Car
                {
                    Id = 17,
                    Name = "Chevrolet Malibu LT",
                    Type = CarType.Sedan,
                    Image = "https://carforma.ru/files/images/wmarks/d7823bb0d19e6429f410250999bdee95.png",
                    Liters = 60,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 5,
                    Price = 2_600_000m,
                    Description = "Улучшенная версия с дополнительным оснащением"
                },
                new Car
                {
                    Id = 18,
                    Name = "Chevrolet Malibu Premier",
                    Type = CarType.Sedan,
                    Image = "https://carforma.ru/files/images/wmarks/d7823bb0d19e6429f410250999bdee95.png",
                    Liters = 60,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 5,
                    Price = 3_000_000m,
                    Description = "Топовая версия с премиальным интерьером"
                },

                // 7. Chevrolet Captiva
                new Car
                {
                    Id = 19,
                    Name = "Chevrolet Captiva LS",
                    Type = CarType.SUV,
                    Image = "https://выхлоп43.рф/assets/cache_image/resources/404/shevrolet-captiva_500x0_82c.png",
                    Liters = 70,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 5,
                    Price = 2_800_000m,
                    Description = "Компактный кроссовер базовой версии"
                },
                new Car
                {
                    Id = 20,
                    Name = "Chevrolet Captiva LT",
                    Type = CarType.SUV,
                    Image = "https://выхлоп43.рф/assets/cache_image/resources/404/shevrolet-captiva_500x0_82c.png",
                    Liters = 70,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 5,
                    Price = 3_200_000m,
                    Description = "Средняя комплектация с полным приводом"
                },
                new Car
                {
                    Id = 21,
                    Name = "Chevrolet Captiva Premier",
                    Type = CarType.SUV,
                    Image = "https://выхлоп43.рф/assets/cache_image/resources/404/shevrolet-captiva_500x0_82c.png",
                    Liters = 70,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 5,
                    Price = 3_600_000m,
                    Description = "Топовая версия с расширенными возможностями"
                },

                // 8. Chevrolet Orlando
                new Car
                {
                    Id = 22,
                    Name = "Chevrolet Orlando LS",
                    Type = CarType.Minivan,
                    Image = "https://storage.yandexcloud.net/cdn.carso.ru/uploads/new_car/175/colors/image_634.png",
                    Liters = 65,
                    Transmission = TransmissionType.Manual,
                    Spaces = 7,
                    Price = 2_100_000m,
                    Description = "Семейный минивэн базовой комплектации"
                },
                new Car
                {
                    Id = 23,
                    Name = "Chevrolet Orlando LT",
                    Type = CarType.Minivan,
                    Image = "https://storage.yandexcloud.net/cdn.carso.ru/uploads/new_car/175/colors/image_634.png",
                    Liters = 65,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 7,
                    Price = 2_400_000m,
                    Description = "Автоматическая коробка, улучшенный комфорт"
                },
                new Car
                {
                    Id = 24,
                    Name = "Chevrolet Orlando Premier",
                    Type = CarType.Minivan,
                    Image = "https://storage.yandexcloud.net/cdn.carso.ru/uploads/new_car/175/colors/image_634.png",
                    Liters = 65,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 7,
                    Price = 2_800_000m,
                    Description = "Премиум версия с мультимедийным комплексом"
                },

                // 9. Chevrolet Camaro
                new Car
                {
                    Id = 25,
                    Name = "Chevrolet Camaro LT",
                    Type = CarType.Coupe,
                    Image = "https://pngicon.ru/file/uploads/avto_camaro.png",
                    Liters = 120,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 4,
                    Price = 5_500_000m,
                    Description = "Спортивное купе с двигателем V6"
                },
                new Car
                {
                    Id = 26,
                    Name = "Chevrolet Camaro SS",
                    Type = CarType.Coupe,
                    Image = "https://pngicon.ru/file/uploads/avto_camaro.png",
                    Liters = 150,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 4,
                    Price = 6_800_000m,
                    Description = "Мощная версия с двигателем V8"
                },
                new Car
                {
                    Id = 27,
                    Name = "Chevrolet Camaro ZL1",
                    Type = CarType.Coupe,
                    Image = "https://pngicon.ru/file/uploads/avto_camaro.png",
                    Liters = 180,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 4,
                    Price = 8_200_000m,
                    Description = "Топовая спортивная версия с суперчарджером"
                },

                // 10. Chevrolet Blazer
                new Car
                {
                    Id = 28,
                    Name = "Chevrolet Blazer LS",
                    Type = CarType.SUV,
                    Image =
                        "https://di-uploads-pod2.dealerinspire.com/bobsteelechevy/uploads/2022/06/mlp-img-top-2022-blazer.png",
                    Liters = 90,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 5,
                    Price = 3_900_000m,
                    Description = "Стильный кроссовер базовой комплектации"
                },
                new Car
                {
                    Id = 29,
                    Name = "Chevrolet Blazer RS",
                    Type = CarType.SUV,
                    Image =
                        "https://di-uploads-pod2.dealerinspire.com/bobsteelechevy/uploads/2022/06/mlp-img-top-2022-blazer.png",
                    Liters = 90,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 5,
                    Price = 4_500_000m,
                    Description = "Спортивная версия с улучшенными характеристиками"
                },
                new Car
                {
                    Id = 30,
                    Name = "Chevrolet Blazer Premier",
                    Type = CarType.SUV,
                    Image =
                        "https://di-uploads-pod2.dealerinspire.com/bobsteelechevy/uploads/2022/06/mlp-img-top-2022-blazer.png",
                    Liters = 90,
                    Transmission = TransmissionType.Automatic,
                    Spaces = 5,
                    Price = 5_200_000m,
                    Description = "Топовая комплектация с полным пакетом опций"
                });
        }
    }