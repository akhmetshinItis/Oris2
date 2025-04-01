import React, { useContext } from 'react';
import { FormContext } from './FormContext';

const RentalInfo = () => {
    const { formData, updateFormData } = useContext(FormContext);

    const handleSelectChange = (e) => {
        const { id, value } = e.target;
        updateFormData('rental', { [id]: value });
    };

    return (
        <div className="container mt-4">
            <div className="card p-4">
                <div className="row align-items-center mb-3">
                    <div className="col-md-12">
                        <h5 className="mb-1">Rental Info</h5>
                        <div className='d-flex' style={{ justifyContent: 'space-between' }}>
                            <p className="small" style={{ color: '#90A3BF' }}>Please select your rental date</p>
                            <small className="small" style={{ color: '#90A3BF' }}>Step 2 of 4</small>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <div className="form-check mb-3">
                        <img src='/public/images/mark.png' />
                        <label className="form-check-label ml-2" htmlFor="pickUp">
                            Pick-Up
                        </label>
                    </div>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="pickupLocation" className="form-label">Locations</label>
                            <select
                                className="form-select custom-select"
                                id="pickupLocation"
                                value={formData.rental.pickupLocation}
                                onChange={handleSelectChange}
                            >
                                <option value="" disabled selected hidden>Select your city</option>
                                <option>New York</option>
                                <option>Moscow</option>
                                <option>Washington</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="pickupDate" className="form-label">Date</label>
                            <select
                                className="form-select custom-select"
                                id="pickupDate"
                                value={formData.rental.pickupDate}
                                onChange={handleSelectChange}
                            >
                                <option value="" disabled selected hidden>Select your date</option>
                                <option>Today</option>
                                <option>Tomorrow</option>
                                <option>17.03.24</option>
                            </select>
                        </div>
                        <div className="mt-3 col-md-6">
                            <label htmlFor="pickupTime" className="form-label">Time</label>
                            <select
                                className="form-select custom-select"
                                id="pickupTime"
                                value={formData.rental.pickupTime}
                                onChange={handleSelectChange}
                            >
                                <option value="" disabled selected hidden>Select your time</option>
                                <option>15:00</option>
                                <option>18:00</option>
                                <option>21:00</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="form-check mb-3">
                        <img src='/public/images/drop-off-icon.png' style={{ height: '16px', width: '16px' }} />
                        <label className="form-check-label ml-2" htmlFor="dropOff">
                            Drop-Off
                        </label>
                    </div>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="dropOffLocation" className="form-label">Locations</label>
                            <select
                                className="form-select custom-select"
                                id="dropOffLocation"
                                value={formData.rental.dropOffLocation}
                                onChange={handleSelectChange}
                            >
                                <option value="" disabled selected hidden>Select your city</option>
                                <option>New York</option>
                                <option>Moscow</option>
                                <option>Washington</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="dropOffDate" className="form-label">Date</label>
                            <select
                                className="form-select custom-select"
                                id="dropOffDate"
                                value={formData.rental.dropOffDate}
                                onChange={handleSelectChange}
                            >
                                <option value="" disabled selected hidden>Select your date</option>
                                <option>Today</option>
                                <option>Tomorrow</option>
                                <option>17.03.24</option>
                            </select>
                        </div>
                        <div className="mt-3 col-md-6">
                            <label htmlFor="dropOffTime" className="form-label">Time</label>
                            <select
                                className="form-select custom-select"
                                id="dropOffTime"
                                value={formData.rental.dropOffTime}
                                onChange={handleSelectChange}
                            >
                                <option value="" disabled selected hidden>Select your time</option>
                                <option>16:00</option>
                                <option>19:00</option>
                                <option>22:00</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RentalInfo;