import React, { useContext, useState } from 'react';
import { SearchContext } from '../context/SearchContext';
import LeftMenu from '../components/LeftMenu';
import Options from '../components/Options';
import CarsSection from '../components/CarsSection';
import { AllCars } from '../context/AllCars';

const Category = () => {
    const { searchQuery } = useContext(SearchContext);

    const [filters, setFilters] = useState({
        types: [],
        capacities: [],
        maxPrice: 200,
    });
    
    const filteredCars = AllCars.filter((car) => {
        const matchesSearch = car.name.toLowerCase().includes(searchQuery);
        const matchesType = filters.types.length === 0 || filters.types.includes(car.carClass);
        const matchesCapacity = filters.capacities.length === 0 || filters.capacities.includes(car.capacity);
        const matchesPrice = parseFloat(car.price.replace('$', '')) <= filters.maxPrice;

        return matchesSearch && matchesType && matchesCapacity && matchesPrice;
    });

    return (
        <div className="row">
            <div className="col-3 p-0 leftmenu-PC">
                <LeftMenu AllCars={AllCars} onFilterChange={setFilters} />
            </div>
            <div className="col-9 p-0 background-gray fake-col-12">
                <Options />
                <CarsSection cars={filteredCars} title="Filtered cars" />
            </div>
        </div>
    );
};

export default Category;