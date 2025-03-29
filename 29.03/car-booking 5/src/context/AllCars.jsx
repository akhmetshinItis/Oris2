import React from 'react';

export const AllCars = [
    // 1. Chevrolet Aveo
    { 
        id: 1, 
        name: 'Chevrolet Aveo LS MT', 
        carClass: 'Sedan', 
        imgSrc: 'https://carso.ru/uploads/stock_cars/168/1477/images/chevrolet_aveo_sedan_6.png', 
        fuel: '45L', 
        transmission: 'Manual', 
        capacity: '5 people', 
        price: '$1,050,000', 
        description: 'Базовая комплектация с механической КПП, кондиционер, ABS' 
    },
    { 
        id: 2, 
        name: 'Chevrolet Aveo LT AT', 
        carClass: 'Sedan', 
        imgSrc: 'https://carso.ru/uploads/stock_cars/168/1477/images/chevrolet_aveo_sedan_6.png', 
        fuel: '45L', 
        transmission: 'Automatic', 
        capacity: '5 people', 
        price: '$1,250,000', 
        description: 'Автоматическая коробка, климат-контроль, мультимедиа' 
    },
    { 
        id: 3, 
        name: 'Chevrolet Aveo Premier', 
        carClass: 'Sedan', 
        imgSrc: 'https://carso.ru/uploads/stock_cars/168/1477/images/chevrolet_aveo_sedan_6.png', 
        fuel: '45L', 
        transmission: 'Automatic', 
        capacity: '5 people', 
        price: '$1,450,000', 
        description: 'Топовая версия с кожаным салоном и системой безопасности' 
    },

    // 2. Chevrolet Niva
    { 
        id: 4, 
        name: 'Chevrolet Niva 1.7 MT', 
        carClass: 'SUV', 
        imgSrc: 'https://kazan.masmotors.ru/colors/chevrolet-niva/3.png', 
        fuel: '58L', 
        transmission: 'Manual', 
        capacity: '5 people', 
        price: '$1,222,000', 
        description: 'Классический внедорожник с полным приводом' 
    },
    { 
        id: 5, 
        name: 'Chevrolet Niva Urban', 
        carClass: 'SUV', 
        imgSrc: 'https://kazan.masmotors.ru/colors/chevrolet-niva/3.png', 
        fuel: '58L', 
        transmission: 'Manual', 
        capacity: '5 people', 
        price: '$1,350,000', 
        description: 'Городская версия с улучшенным комфортом' 
    },
    { 
        id: 6, 
        name: 'Chevrolet Niva Legend', 
        carClass: 'SUV', 
        imgSrc: 'https://kazan.masmotors.ru/colors/chevrolet-niva/3.png', 
        fuel: '58L', 
        transmission: 'Manual', 
        capacity: '5 people', 
        price: '$1,450,000', 
        description: 'Специальная серия с дополнительной защитой' 
    },

    // 3. Chevrolet Cruze
    { 
        id: 7, 
        name: 'Chevrolet Cruze LS', 
        carClass: 'Sedan', 
        imgSrc: 'https://kazan.masmotors.ru/colors/chevrolet-cruze-sedan/4.png', 
        fuel: '52L', 
        transmission: 'Manual', 
        capacity: '5 people', 
        price: '$1,500,000', 
        description: 'Базовый седан с механической КПП' 
    },
    { 
        id: 8, 
        name: 'Chevrolet Cruze LTZ', 
        carClass: 'Sedan', 
        imgSrc: 'https://kazan.masmotors.ru/colors/chevrolet-cruze-sedan/4.png', 
        fuel: '52L', 
        transmission: 'Automatic', 
        capacity: '5 people', 
        price: '$1,800,000', 
        description: 'Автоматическая коробка, премиум-комплектация' 
    },
    { 
        id: 9, 
        name: 'Chevrolet Cruze Premier', 
        carClass: 'Sedan', 
        imgSrc: 'https://kazan.masmotors.ru/colors/chevrolet-cruze-sedan/4.png', 
        fuel: '52L', 
        transmission: 'Automatic', 
        capacity: '5 people', 
        price: '$2,100,000', 
        description: 'Топовая версия с полным пакетом опций' 
    },

    // 4. Chevrolet Tahoe
    { 
        id: 10, 
        name: 'Chevrolet Tahoe LS', 
        carClass: 'SUV', 
        imgSrc: 'https://wallpapers.com/images/hd/white-chevrolet-tahoe-s-u-v-profile-hxxci41yvgrn2kxs.jpg', 
        fuel: '98L', 
        transmission: 'Automatic', 
        capacity: '7 people', 
        price: '$6,500,000', 
        description: 'Базовый полноразмерный внедорожник' 
    },
    { 
        id: 11, 
        name: 'Chevrolet Tahoe LTZ', 
        carClass: 'SUV', 
        imgSrc: 'https://wallpapers.com/images/hd/white-chevrolet-tahoe-s-u-v-profile-hxxci41yvgrn2kxs.jpg', 
        fuel: '98L', 
        transmission: 'Automatic', 
        capacity: '7 people', 
        price: '$7,800,000', 
        description: 'Люксовая версия с расширенным оснащением' 
    },
    { 
        id: 12, 
        name: 'Chevrolet Tahoe Premier', 
        carClass: 'SUV', 
        imgSrc: 'https://wallpapers.com/images/hd/white-chevrolet-tahoe-s-u-v-profile-hxxci41yvgrn2kxs.jpg', 
        fuel: '98L', 
        transmission: 'Automatic', 
        capacity: '7 people', 
        price: '$8,500,000', 
        description: 'Топовая комплектация с технологиями премиум-класса' 
    },

    // 5. Chevrolet Traverse
    { 
        id: 13, 
        name: 'Chevrolet Traverse LS', 
        carClass: 'SUV', 
        imgSrc: 'https://chevrolet.uz/assets/images/traverse/colors/2.png', 
        fuel: '85L', 
        transmission: 'Automatic', 
        capacity: '7 people', 
        price: '$4,200,000', 
        description: 'Семейный кроссовер базовой комплектации' 
    },
    { 
        id: 14, 
        name: 'Chevrolet Traverse LT', 
        carClass: 'SUV', 
        imgSrc: 'https://chevrolet.uz/assets/images/traverse/colors/2.png', 
        fuel: '85L', 
        transmission: 'Automatic', 
        capacity: '7 people', 
        price: '$4,800,000', 
        description: 'Улучшенная версия с дополнительными опциями' 
    },
    { 
        id: 15, 
        name: 'Chevrolet Traverse Premier', 
        carClass: 'SUV', 
        imgSrc: 'https://chevrolet.uz/assets/images/traverse/colors/2.png', 
        fuel: '85L', 
        transmission: 'Automatic', 
        capacity: '7 people', 
        price: '$5,500,000', 
        description: 'Премиум комплектация с полным приводом' 
    }
];

export const PopularCars = AllCars.slice(0, 4);

export const RecommendationCars = AllCars;
    

