import React from 'react';

const Options = () => {
    return (
        <section class="options">
                <div class="form-group pick-up">
                    <h3><img src="src/assets/pick-up-icon.png" alt="Pick-Up Icon"/> Pick - Up</h3>
                    <div class="form-fields">
                        <div class="field">
                            <label for="locations-pickup">Locations</label>
                            <select id="locations-pickup">
                                <option value disabled selected hidden>Select your city</option>
                                <option>New York</option>
                                <option>Moscow</option>
                                <option>Washington</option>
                            </select>
                        </div>
                        <div class="field-divider vertical"></div>
                        <div class="field">
                            <label for="date-pickup">Date</label>
                            <select id="date-pickup">
                                <option value disabled selected hidden>Select your date</option>
                                <option>Today</option>
                                <option>Tomorrow</option>
                                <option>17.03.24</option>
                            </select>
                        </div>
                        <div class="field-divider vertical"></div>
                        <div class="field">
                            <label for="time-pickup">Time</label>
                            <select id="time-pickup">
                                <option value disabled selected hidden>Select your time</option>
                                <option>15:00</option>
                                <option>18:00</option>
                                <option>21:00</option>
                            </select>
                        </div>
                    </div>
                </div>
                <button class="swap-button"><img src="src/assets/swap-icon.png" alt="Swap Icon"/></button>
                <div class="form-group drop-off">
                    <h3><img src="src/assets/drop-off-icon.png" alt="Drop-Off Icon"/> Drop - Off</h3>
                    <div class="form-fields">
                        <div class="field">
                            <label for="locations-dropoff">Locations</label>
                            <select id="locations-dropoff">
                                <option value disabled selected hidden>Select your city</option>
                                <option>New York</option>
                                <option>Moscow</option>
                                <option>Washington</option>
                            </select>
                        </div>
                        <div class="field-divider vertical"></div>
                        <div class="field">
                            <label for="date-dropoff">Date</label>
                            <select id="date-dropoff">
                                <option value disabled selected hidden>Select your date</option>
                                <option>Today</option>
                                <option>Tomorrow</option>
                                <option>17.03.24</option>
                            </select>
                        </div>
                        <div class="field-divider vertical"></div>
                        <div class="field">
                            <label for="time-dropoff">Time</label>
                            <select id="time-dropoff">
                                <option value disabled selected hidden>Select your time</option>
                                <option>16:00</option>
                                <option>19:00</option>
                                <option>22:00</option>
                            </select>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Options;