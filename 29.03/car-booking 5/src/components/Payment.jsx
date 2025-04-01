import BillingInfo from "../components/PaymentPage/BillingInfo";
import Confirmation from "../components/PaymentPage/Confirmation";
import PaymentFields from "../components/PaymentPage/PaymentFields";
import RentalInfo from "../components/PaymentPage/RentalInfo";
import RentalSum from "../components/PaymentPage/RentalSum";
import { useParams } from 'react-router-dom';
import React, { useContext, useState, useEffect } from 'react';
import { FormProvider } from "./PaymentPage/FormContext";


const Payment = () => {

    const { id } = useParams();
    const [car, setCar] = useState([]); // Инициализируем как null
        
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

    return(
        <>
            <div className="d-flex">
                <FormProvider>
                <div className="left-section">
                    <BillingInfo />
                    <RentalInfo />
                    <PaymentFields />
                    <Confirmation />
                </div>
                </FormProvider>
                <RentalSum car = {car}/>
            </div>

        </>
    )

}
export default Payment;