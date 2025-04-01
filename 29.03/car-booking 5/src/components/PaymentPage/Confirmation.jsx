import React, { useContext } from 'react';
import { FormContext } from './FormContext';

const Confirmation = () => {
    const { formData, updateFormData } = useContext(FormContext);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Создаем объект FormData
        const formDataToSend = new FormData();
        formDataToSend.append('name', formData.billing.name);
        formDataToSend.append('email', formData.billing.email);
        formDataToSend.append('address', formData.billing.address);
        formDataToSend.append('townCity', formData.billing.townCity);
        formDataToSend.append('pickupLocation', formData.rental.pickupLocation);
        formDataToSend.append('pickupDate', formData.rental.pickupDate);
        formDataToSend.append('pickupTime', formData.rental.pickupTime);
        formDataToSend.append('dropOffLocation', formData.rental.dropOffLocation);
        formDataToSend.append('dropOffDate', formData.rental.dropOffDate);
        formDataToSend.append('dropOffTime', formData.rental.dropOffTime);
        formDataToSend.append('cardNumber', formData.payment.cardNumber);
        formDataToSend.append('expirationDate', formData.payment.expirationDate);
        formDataToSend.append('cardHolder', formData.payment.cardHolder);
        formDataToSend.append('cvc', formData.payment.cvc);
        formDataToSend.append('termsChecked', formData.confirmation.termsChecked);
        formDataToSend.append('privacyChecked', formData.confirmation.privacyChecked);

        try {
            // Отправляем данные на сервер
            const response = await fetch('http://localhost:5185/Email', {
                method: 'POST',
                body: formDataToSend, // Используем FormData
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Success:', result);
            alert('Form submitted successfully!');
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleCheckboxChange = (e) => {
        const { id, checked } = e.target;
        updateFormData('confirmation', { [id]: checked });
    };

    return (
        <div className="container mt-4 mb-4">
            <div className="card p-4">
                <div className="row align-items-center mb-3">
                    <div className="col-md-12">
                        <h5 className="mb-1">Confirmation</h5>
                        <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                            <p className="small" style={{ color: '#90A3BF' }}>We are getting to the end. Just a few clicks and your rental is ready!</p>
                            <small className="small" style={{ color: '#90A3BF' }}>Step 4 of 4</small>
                        </div>
                    </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="form-check mb-4 rounded-lg p-2" style={{ backgroundColor: '#F6F7F9', border: '1px solid #ddd' }}>
                        <input
                            className="form-check-input ml-2"
                            type="checkbox"
                            id="termsChecked"
                            checked={formData.confirmation.termsChecked}
                            onChange={handleCheckboxChange}
                            style={{ transform: 'scale(1.5)' }}
                        />
                        <label className="form-check-label ml-5" htmlFor="termsChecked">
                            I agree with sending an Marketing and newsletter emails. No spam, promissed!
                        </label>
                    </div>
                    <div className="form-check mb-4 rounded-lg p-2" style={{ backgroundColor: '#F6F7F9', border: '1px solid #ddd' }}>
                        <input
                            className="form-check-input ml-2"
                            type="checkbox"
                            id="privacyChecked"
                            checked={formData.confirmation.privacyChecked}
                            onChange={handleCheckboxChange}
                            style={{ transform: 'scale(1.5)' }}
                        />
                        <label className="form-check-label ml-5" htmlFor="privacyChecked">
                            I agree with our terms and conditions and privacy policy.
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary w-25 mb-4">Rent Now</button>
                    <img className='mb-3' src='/public/images/ic-security-safety.png' style={{ height: '32px', width: '32px' }} />
                    <div className="d-flex align-items-center mb-2">
                        <p className="mb-0">All your data are safe</p>
                    </div>
                    <p className="text-muted small">We are using the most advanced security to provide you the best experience ever.</p>
                </form>
            </div>
        </div>
    );
};

export default Confirmation;