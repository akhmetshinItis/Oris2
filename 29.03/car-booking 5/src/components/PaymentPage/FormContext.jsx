import { createContext, useState } from 'react';

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        billing: {
            name: '',
            email: '',
            address: '',
            townCity: '',
        },
        rental: {
            pickupLocation: '',
            pickupDate: '',
            pickupTime: '',
            dropOffLocation: '',
            dropOffDate: '',
            dropOffTime: '',
        },
        payment: {
            cardNumber: '',
            expirationDate: '',
            cardHolder: '',
            cvc: '',
        },
        confirmation: {
            termsChecked: false,
            privacyChecked: false,
        },
    });

    const updateFormData = (section, updates) => {
        setFormData((prevData) => ({
            ...prevData,
            [section]: { ...prevData[section], ...updates },
        }));
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
};