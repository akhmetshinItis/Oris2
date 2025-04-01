import React, { useState } from 'react';

const LeftMenu = ({ AllCars, onFilterChange }) => {
    // Проверка входных данных
    const typeCounts = Array.isArray(AllCars)
        ? AllCars.reduce((counts, car) => {
              if (car.type) {
                  counts[car.type] = (counts[car.type] || 0) + 1;
              }
              return counts;
          }, {})
        : {};

    const capacityCounts = Array.isArray(AllCars)
        ? AllCars.reduce((counts, car) => {
              if (car.spaces) {
                  counts[car.spaces] = (counts[car.spaces] || 0) + 1;
              }
              return counts;
          }, {})
        : {};

    // Инициализация фильтров
    const maxPrice = Array.isArray(AllCars) && AllCars.length > 0
        ? Math.max(...AllCars.map(car => car.price || 0), 200)
        : 200;

    const [filters, setFilters] = useState({
        types: [],
        capacities: [],
        maxPrice: maxPrice,
    });

    // Обработчики изменений фильтров
    const handleTypeChange = (type) => {
        setFilters((prevFilters) => {
            const updatedTypes = prevFilters.types.includes(type)
                ? prevFilters.types.filter((t) => t !== type)
                : [...prevFilters.types, type];
            const newFilters = { ...prevFilters, types: updatedTypes };
            onFilterChange(newFilters);
            return newFilters;
        });
    };

    const handleCapacityChange = (capacity) => {
        setFilters((prevFilters) => {
            const updatedCapacities = prevFilters.capacities.includes(capacity)
                ? prevFilters.capacities.filter((c) => c !== capacity)
                : [...prevFilters.capacities, capacity];
            const newFilters = { ...prevFilters, capacities: updatedCapacities };
            onFilterChange(newFilters);
            return newFilters;
        });
    };

    const handlePriceChange = (event) => {
        const newPrice = event.target.value;
        setFilters((prevFilters) => {
            const newFilters = { ...prevFilters, maxPrice: parseInt(newPrice, 10) };
            onFilterChange(newFilters);
            return newFilters;
        });
    };

    console.log("AllCars:", AllCars);
console.log("Parsed types:", Object.keys(typeCounts));
console.log("Parsed capacities:", Object.keys(capacityCounts));

    return (
        <div className="left-menu">
            <div className="section">
                <h3>TYPE</h3>
                {Object.keys(typeCounts).length > 0 ? (
                    Object.keys(typeCounts).map((type) => (
                        <label key={type} className="checkbox-label">
                            <input
                                type="checkbox"
                                checked={filters.types.includes(type)}
                                onChange={() => handleTypeChange(type)}
                            />
                            {type} ({typeCounts[type]})
                        </label>
                    ))
                ) : (
                    <p>No types available.</p>
                )}
            </div>

            <div className="section">
                <h3>CAPACITY</h3>
                {Object.keys(capacityCounts).length > 0 ? (
                    Object.keys(capacityCounts).map((capacity) => (
                        <label key={capacity} className="checkbox-label">
                            <input
                                type="checkbox"
                                checked={filters.capacities.includes(Number(capacity))}
                                onChange={() => handleCapacityChange(Number(capacity))}
                            />
                            {capacity} Person ({capacityCounts[capacity]})
                        </label>
                    ))
                ) : (
                    <p>No capacities available.</p>
                )}
            </div>

            <div className="section">
                <h3>PRICE</h3>
                <input
                    type="range"
                    min="0"
                    max="2000000" // Увеличено до максимальной цены
                    step="50000" // Шаг изменения цены
                    value={filters.maxPrice}
                    onChange={handlePriceChange}
                    className="price-slider"
                />
                <p>Max. ${filters.maxPrice}</p>
            </div>
        </div>
    );
};

export default LeftMenu;