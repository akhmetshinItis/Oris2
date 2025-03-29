import React from 'react';
import CarCard from './CarCard';
import { Link } from 'react-router-dom';

const CarsSection = ({ cars, title, showViewAll = false, onViewAllClick }) => {
    return (
        <section className="cars-cards">
            {title && (
                <div className="row mb-3 align-items-center">
                    <h4 className="highlited-gray col-6">{title}</h4>
                    {showViewAll && (
                    <div className="col-6 d-flex justify-content-end">
                        <div
                            className="highlited-gray viewAlla"
                            onClick={onViewAllClick}
                            style={{ cursor: 'pointer' }}>
                            <Link to='/category'>View All</Link>
                        </div>
                    </div>
                    )}
                </div>
            )}


            <div className="row">
                {cars.length > 0 ? (
                    cars.map((car) => (
                        <div key={car.id} className="col-10 offset-1 col-lg-6 offset-lg-0 col-xl-3 car p-3">
                            <CarCard {...car} />
                        </div>
                    ))
                ) : (
                    <p>No cars found</p>
                )}
            </div>
        </section>
    );
};

export default CarsSection;