import React, { useContext, useState, useEffect } from 'react';
import PayForm from '../components/PayForm'
import RentalSum from '../components/RentalSum'
import { useParams } from 'react-router-dom';



const PayPage = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null); // Инициализируем как null
        
        // Загрузка данных конкретного автомобиля
        useEffect(() => {
            fetch(`http://localhost:5185/api/Cars/GetById/${id}`)
                .then(async (response) => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    let data = await response.json();
                    setCar(data);
                })
                .catch((error) => {
                    console.error("Error fetching car details:", error);
                });
        }, [id]);
    

    if (!car) {
        return <div>Car not found</div>;
    }

    return (
        <div className="row">
            <div className="col-7 p-0 background-gray">
                <PayForm />
            </div>
            <div className="col-5 p-0 fake-col-12  background-gray">
                <RentalSum car = {car}/>
            </div>
        </div>
    );
};

export default PayPage;