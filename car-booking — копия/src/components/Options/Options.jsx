const Options = () => {
 return(
    <section class="options">
            <div class="form-group pick-up">
                <h3><img src="src/assets/images/pick-up-icon.png" alt="Pick-Up Icon"/> Pick - Up</h3>
                <div class="form-fields">
                    <div class="field">
                        <label for="locations-pickup">Locations</label>
                        <select id="locations-pickup">
                            <option value="">Select your city</option>
                        </select>
                    </div>
                    <div class="field-divider vertical"></div>
                    <div class="field">
                        <label for="date-pickup">Date</label>
                        <select id="date-pickup">
                            <option value="">Select your date</option>
                        </select>
                    </div>
                    <div class="field-divider vertical"></div>
                    <div class="field">
                        <label for="time-pickup">Time</label>
                        <select id="time-pickup">
                            <option value="">Select your time</option>
                        </select>
                    </div>
                </div>
            </div>
            <button class="swap-button"><img src="src/assets/images/swap-icon.png" alt="Swap Icon"/></button>
            <div class="form-group drop-off">
                <h3><img src="src/assets/images/drop-off-icon.png" alt="Drop-Off Icon"/> Drop - Off</h3>
                <div class="form-fields">
                    <div class="field">
                        <label for="locations-dropoff">Locations</label>
                        <select id="locations-dropoff">
                            <option value="">Select your city</option>
                        </select>
                    </div>
                    <div class="field-divider vertical"></div>
                    <div class="field">
                        <label for="date-dropoff">Date</label>
                        <select id="date-dropoff">
                            <option value="">Select your date</option>
                        </select>
                    </div>
                    <div class="field-divider vertical"></div>
                    <div class="field">
                        <label for="time-dropoff">Time</label>
                        <select id="time-dropoff">
                            <option value="">Select your time</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    );
 };

 export default Options;