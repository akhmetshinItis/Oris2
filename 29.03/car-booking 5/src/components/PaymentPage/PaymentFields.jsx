import { FormContext } from './FormContext';
import React, { useContext, useState, useEffect } from 'react';


const PaymentFields = () => {
    const { formData, updateFormData } = useContext(FormContext);
    const [selectedMethod, setSelectedMethod] = useState('creditCard');

    const handleRadioChange = (event) => {
        setSelectedMethod(event.target.value);
    };

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        updateFormData('payment', { [id]: value });
    };

    return (
        <div className="container mt-4">
            <div className="card p-4">
                <div className="row align-items-center mb-3">
                    <div className="col-md-12">
                        <h5 className="mb-1">Payment Method</h5>
                        <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                            <p className="small" style={{ color: '#90A3BF' }}>Please enter your payment method</p>
                            <small className="small" style={{ color: '#90A3BF' }}>Step 3 of 4</small>
                        </div>
                    </div>
                </div>
                <div
                    className="rounded p-4"
                    style={{ backgroundColor: '#F6F7F9', border: '1px solid #ddd' }}
                >
                    <div className="form-check mb-3">
                        <div className='d-flex justify-content-between' style={{ gap: '10px' }}>
                            <div>
                                <img src='/public/images/mark.png' />
                                <label className="form-check-label ml-2" htmlFor="creditCard">
                                    Credit Card
                                </label>
                            </div>
                            <img
                                src="/public/images/Visa.png"
                                alt="Visa & Mastercard"
                                style={{ width: '100px' }}
                            />
                        </div>
                    </div>
                    {selectedMethod === 'creditCard' && (
                        <form>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <label htmlFor="cardNumber" className="form-label">
                                        Card Number
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cardNumber"
                                        placeholder="Card number"
                                        value={formData.payment.cardNumber}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="expirationDate" className="form-label">
                                        Expiration Date
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="expirationDate"
                                        placeholder="DD/MM/YY"
                                        value={formData.payment.expirationDate}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="cardHolder" className="form-label">
                                        Card Holder
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cardHolder"
                                        placeholder="Card holder"
                                        value={formData.payment.cardHolder}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="cvc" className="form-label">
                                        CVC
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cvc"
                                        placeholder="CVC"
                                        value={formData.payment.cvc}
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PaymentFields;