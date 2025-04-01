import React, { useContext } from 'react';
import { FormContext } from './FormContext';

const BillingInfo = () => {
    const { formData, updateFormData } = useContext(FormContext);

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        updateFormData('billing', { [id]: value });
    };

    return (
        <div className="container mt-4">
            <div className="card p-4">
                <div className="row mb-3 justify-content-end">
                    <div className="col-md-12">
                        <h5 className="mb-1">Billing Info</h5>
                        <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                            <p className="small" style={{ color: '#90A3BF' }}>Please enter your billing info</p>
                            <small className="small" style={{ color: '#90A3BF' }}>Step 1 of 4</small>
                        </div>
                    </div>
                </div>
                <div className="row g-3">
                    <div className="col-md-6 mb-4">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            id="name"
                            placeholder="Your name"
                            value={formData.billing.name}
                            onChange={handleInputChange}
                            style={{ backgroundColor: '#F6F7F9' }}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control custom-input"
                            id="email"
                            placeholder="Email"
                            value={formData.billing.email}
                            onChange={handleInputChange}
                            style={{ backgroundColor: '#F6F7F9' }}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            id="address"
                            placeholder="Address"
                            value={formData.billing.address}
                            onChange={handleInputChange}
                            style={{ backgroundColor: '#F6F7F9' }}
                        />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="townCity" className="form-label">Town / City</label>
                        <input
                            type="text"
                            className="form-control custom-input"
                            id="townCity"
                            placeholder="Town or city"
                            value={formData.billing.townCity}
                            onChange={handleInputChange}
                            style={{ backgroundColor: '#F6F7F9' }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BillingInfo;