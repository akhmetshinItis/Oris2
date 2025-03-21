import CarCard from "../CarCard/CarCard";
import CarsData from "../CarsData";
import React from 'react';

const PopularCars = () => {
    return (
        <>
            <div className="text">
                <h4 className="highlited-gray">Popular cars</h4>
                <a href="/DetailCar" className="view">View All</a> 
            </div>
            <div className="popular-cars row">
                {CarsData.slice(0, 4).map(car => (
                    <div className="col-10 offset-1 col-lg-6 offset-lg-0 col-xl-3 car p-3">
                        <CarCard
                            name={car.name}
                            cathegory={car.category}
                            img={car.img}
                            liters={car.liters}
                            transmission={car.transmission}
                            spaces={car.spaces}
                            price={car.price}
                        />
                    </div>
                ))}
            </div>
        </>
    );
};

export default PopularCars;