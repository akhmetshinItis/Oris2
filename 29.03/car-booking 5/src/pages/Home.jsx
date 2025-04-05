import React, { useContext, useState } from 'react';
import { SearchContext } from '../context/SearchContext';
import Ads from '../components/Ads';
import Options from '../components/Options';
import CarsSection from '../components/CarsSection';
import { PopularCars, RecommendationCars } from '../context/AllCars';
import { useEffect } from 'react';

const Home = () => {
    const [cars, setCars] = useState([]);
    

    useEffect(() => {
        fetch("http://localhost:5185/api/Cars/GetAll")
        .then(async(response) => {
                let data = await response.json();
                setCars(data);
                console.log(data)
        })
    }, [])

    const { searchQuery } = useContext(SearchContext);

    // const filteredPopularCars = cars.slice(0, 4).filter((car) =>
    //     car.name.toLowerCase().includes(searchQuery)
    // );



    // const filteredRecommendationCars = cars.filter((car) =>
    //     car.name.toLowerCase().includes(searchQuery)
    // );

    useEffect(() => {
        const fetchFilteredCars = async () => {
          try {
            // Создаем URL с query-параметрами
            const url = new URL("http://localhost:5185/api/Cars/GetFiltered");
    
            if (searchQuery) {
              url.searchParams.append("name", searchQuery);
            }
    
            const response = await fetch(url);
    
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const data = await response.json();
            setCars(data);
          } catch (error) {
            console.error("Error fetching cars:", error);
          }
        };
    
        fetchFilteredCars();
      }, [searchQuery]);

    return (
        <div className='background-gray'>
            <Ads />
            <Options />
            <CarsSection
                cars={cars}
                title="Popular cars"
                showViewAll={true}
                onViewAllClick={() => console.log('View all popular cars')}
            />
            <CarsSection
                cars={cars}
                title="Recommendation cars"
                showViewAll={false}
            />
        </div>
    );
};

export default Home;