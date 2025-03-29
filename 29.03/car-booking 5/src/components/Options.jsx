import React from 'react';

const Options = () => {
  return (
    <div className='row justify-content-center'>
      <section className="options col-8">
        <div className="form-group pick-up">
          <h3><img src="./images/pick-up-icon.png" alt="Pick-Up Icon" /> Pick - Up</h3>
          <div className="form-fields">
            <div className="field">
              <label htmlFor="locations-pickup">Locations</label>
              <select id="locations-pickup">
                <option value="">Select your city</option>
              </select>
            </div>
            <div className="field-divider vertical"></div>
            <div className="field">
              <label htmlFor="date-pickup">Date</label>
              <select id="date-pickup">
                <option value="">Select your date</option>
              </select>
            </div>
            <div className="field-divider vertical"></div>
            <div className="field">
              <label htmlFor="time-pickup">Time</label>
              <select id="time-pickup">
                <option value="">Select your time</option>
              </select>
            </div>
          </div>
        </div>
        <button className="swap-button"><img src="/images/swap-icon.png" alt="Swap Icon" /></button>
        <div className="form-group drop-off">
          <h3><img src="./images/drop-off-icon.png" alt="Drop-Off Icon" /> Drop - Off</h3>
          <div className="form-fields">
            <div className="field">
              <label htmlFor="locations-dropoff">Locations</label>
              <select id="locations-dropoff">
                <option value="">Select your city</option>
              </select>
            </div>
            <div className="field-divider vertical"></div>
            <div className="field">
              <label htmlFor="date-dropoff">Date</label>
              <select id="date-dropoff">
                <option value="">Select your date</option>
              </select>
            </div>
            <div className="field-divider vertical"></div>
            <div className="field">
              <label htmlFor="time-dropoff">Time</label>
              <select id="time-dropoff">
                <option value="">Select your time</option>
              </select>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Options;
