import React, { useContext } from 'react';
import { SearchContext } from '../context/SearchContext';
import LeftMenu from '../components/LeftMenu';
import CarsSection from '../components/CarsSection';
import {AllCars} from '../context/AllCars';
import {AllReviews} from '../context/AllReviews';
import Reviews from '../components/Reviews';
import CarInfo from '../components/CarInfo';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';



const CarDetail = () => {

    const { searchQuery } = useContext(SearchContext);

    const filteredCars = AllCars.filter((car) =>
        car.name.toLowerCase().includes(searchQuery)
    );

    const { id } = useParams();
    const carId = parseInt(id, 10);

    const [car, setCar] = useState([]);
    const [reviews, setReview] = useState([]);
    

    useEffect(() => {
        fetch(`http://localhost:5185/api/Cars/GetById/${id}`)
        .then(async(response) => {
                let data = await response.json();
                setCar(data);
                console.log(data)
        })
    }, [])

    useEffect(() => {
        fetch(`http://localhost:5185/Comments/GetCArComments/${id}`)
        .then(async(response) => {
            let data = await response.json();
            setReview(data);
            console.log(data);
        })
    }, [])

    if (!car) {
        return <div>Car not found</div>;
    }

    const reviews1 = AllReviews.filter(review => review.carId === carId);

    return (
        <div className="row">
            <div className="col-3 p-0 leftmenu-PC">
                <LeftMenu AllCars = {AllCars} />
            </div>
            <div className="col-9 background-gray p-0 fake-col-12">
                <CarInfo car = {car}/>
                <Reviews reviews = {reviews}/>
                <CarsSection cars={filteredCars} />
            </div>
        </div>
    );
};

export default CarDetail;