import React, { useContext, useState, useEffect } from 'react';
import { SearchContext } from '../context/SearchContext';
import { useSearchParams } from 'react-router-dom';
import LeftMenu from '../components/LeftMenu';
import Options from '../components/Options';
import CarsSection from '../components/CarsSection';

const Category = () => {
    const { searchQuery, setSearchQuery } = useContext(SearchContext);
    const [searchParams, setSearchParams] = useSearchParams();
    const [allCars, setAllCars] = useState([]); // Состояние для всех машин
    const [filteredCars, setFilteredCars] = useState([]);

    // Инициализация фильтров из URL
    const [filters, setFilters] = useState({
        types: searchParams.getAll('carType') || [],
        capacities: searchParams.getAll('capacity') || [],
        maxPrice: searchParams.get('priceUnder') || '',
    });

    // Синхронизация searchQuery с URL
    useEffect(() => {
        const queryFromUrl = searchParams.get('q') || '';
        if (queryFromUrl) {
            setSearchQuery(queryFromUrl);
        }
    }, [searchParams, setSearchQuery]);

    // Обновление URL при изменении searchQuery
    useEffect(() => {
        if (searchQuery) {
            searchParams.set('q', searchQuery);
        } else {
            searchParams.delete('q');
        }
        setSearchParams(searchParams);
    }, [searchQuery, searchParams, setSearchParams]);

    // Обновление URL при изменении фильтров
    useEffect(() => {
        searchParams.delete('carType');
        searchParams.delete('capacity');
        searchParams.delete('priceUnder');

        filters.types.forEach(type => searchParams.append('carType', type));
        filters.capacities.forEach(capacity => searchParams.append('capacity', capacity));
        if (filters.maxPrice) {
            searchParams.set('priceUnder', filters.maxPrice);
        }

        setSearchParams(searchParams);
    }, [filters, searchParams, setSearchParams]);

    // Загрузка всех машин
    useEffect(() => {
        fetch("http://localhost:5185/api/Cars/GetAll")
            .then(async (response) => {
                const data = await response.json();
                setAllCars(data); // Сохраняем все машины в состоянии
            })
            .catch((error) => {
                console.error("Ошибка при загрузке данных:", error);
            });
    }, []);

    // Функция для получения отфильтрованных данных с бекенда
    const fetchFilteredCars = async () => {
        try {
            const queryParams = new URLSearchParams();

            // Добавляем фильтры в запрос
            filters.types.forEach(type => queryParams.append('carType', type));
            filters.capacities.forEach(capacity => queryParams.append('capacity', capacity));
            if (filters.maxPrice) {
                queryParams.append('price', filters.maxPrice);
            }

            // Отправляем запрос на бекенд
            const response = await fetch(`http://localhost:5185/api/Cars/GetFiltered?${queryParams.toString()}`);
            const data = await response.json();

            // Применяем поиск к полученным данным
            let filteredData = data;
            if (searchQuery.trim() !== "") {
                filteredData = data.filter(car =>
                    car.name.toLowerCase().includes(searchQuery.toLowerCase())
                );
            }

            setFilteredCars(filteredData);
        } catch (error) {
            console.error("Ошибка при получении данных:", error);
        }
    };

    // Загрузка данных при монтировании компонента
    useEffect(() => {
        fetchFilteredCars();
    }, []);

    // Реакция на изменения фильтров
    useEffect(() => {
        fetchFilteredCars();
    }, [filters]);

    // Реакция на изменения поискового запроса
    useEffect(() => {
        if (searchQuery.trim() !== "") {
            const filteredData = filteredCars.filter(car =>
                car.name.toLowerCase().includes(searchQuery.toLowerCase())
            );
            setFilteredCars(filteredData);
        } else {
            fetchFilteredCars(); // Если поисковый запрос пустой, загружаем данные без поиска
        }
    }, [searchQuery]);

    // Обработка изменения фильтров
    const handleFilterChange = (newFilters) => {
        setFilters(newFilters);
    };

    return (
        <div className="row">
            <div className="col-3 p-0 leftmenu-PC">
                {/* Передаем allCars в LeftMenu */}
                <LeftMenu
                    AllCars={allCars}
                    onFilterChange={handleFilterChange}
                    initialFilters={filters}
                />
            </div>

            <div className="col-9 p-0 background-gray fake-col-12">
                <Options />
                <CarsSection cars={filteredCars} />
            </div>
        </div>
    );
};

export default Category;