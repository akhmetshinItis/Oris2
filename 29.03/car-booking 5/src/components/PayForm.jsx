const PayForm = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const formData = new FormData(e.target);

            const response = await fetch('http://localhost:5185/Email', {
                method: 'POST',
                body: formData
            });

            if(response.ok){
                alert("Ваша заявка зарегистрирована, результат отправлен вам на почту");
            }
            
            if (!response.ok) {
                throw new Error(result.message || 'Server error');
            }

        } catch (error) {
            console.error('Error:', error);
        }
    };



    return (
        <form  onSubmit={handleSubmit} encType="multipart/form-data">
            <div className='row p-4'>
                <div className='col-12 p-4 form-container'>
                    <div className='row p-0'>
                        <div className='col-12'>
                            <h5>Billing Info</h5> 
                        </div>
                        <div className='col-8 pr-4'>
                            <p><highlited-gray>Please enter your billing info</highlited-gray></p> 
                        </div>
                        <div className='col-4 pb-4 pl-4 t-e'>
                            <p><highlited-gray>Step 1 of 4</highlited-gray></p>
                        </div>
                        <div className='col-6 pr-4'>
                            <h6>Name</h6>
                            <input className="form-container-input" type="text" id="Name" name="Name" required  placeholder="Your Name"></input>
                        </div>
                        <div className='col-6 pb-4 pl-4'>
                            <h6>Email</h6>
                            <input className="form-container-input" type="email" id="Email" name="Email" required placeholder="Email"></input>
                        </div>
                        <div className='col-6 pr-4'>
                            <h6>Address</h6>
                            <input className="form-container-input" type="text" id="Address" name="Address" required  placeholder="Address"></input>
                        </div>
                        <div className='col-6 pl-4'>
                            <h6>Town/City</h6>
                            <input className="form-container-input" type="text" id="City" name="City" required  placeholder="Town or City"></input>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row p-4'>
                <div className='col-12 py-4 form-container'>
                    <div className='row p-0'>
                        <div className='col-12'>
                            <h5>Rental Info</h5> 
                        </div>
                        <div className='col-8 pr-4'>
                            <p><highlited-gray>Please select your rental date</highlited-gray></p> 
                        </div>
                        <div className='col-4 pl-4 t-e'>
                            <p><highlited-gray>Step 2 of 4</highlited-gray></p>
                        </div>
                        <div className="col-12">
                            <div className="row px-0 py-4">
                                <img src="/images/pick-up-icon.png" className="mr-3"></img>
                                <h6 className="m-0 mt-1">Pick-Up</h6>
                            </div>
                        </div>
                        
                        <div className='col-6 pr-4'>
                        <h6>Locations</h6>
                            <select id="CityPick" name="CityPick" required>
                                <option value="" disabled selected>Select your city</option>
                                <option value="New York">New York</option>
                                <option value="Los Angeles">Los Angeles</option>
                                <option value="Chicago">Chicago</option>
                                <option value="Houston">Houston</option>
                                <option value="Phoenix">Phoenix</option>
                                <option value="Philadelphia">Philadelphia</option>
                                <option value="San Antonio">San Antonio</option>
                                <option value="San Diego">San Diego</option>
                                <option value="Dallas">Dallas</option>
                                <option value="San Jose">San Jose</option>
                            </select>
                        </div>
                        <div className='col-6 pb-4 pl-4'>
                            <h6>Date</h6>
                            <select id="DatePick" name="DatePick" required>
                                <option value="" disabled selected>Select your date</option>
                                <option value="2023-10-01">2023-10-01</option>
                                <option value="2023-10-02">2023-10-02</option>
                                <option value="2023-10-03">2023-10-03</option>
                                <option value="2023-10-04">2023-10-04</option>
                                <option value="2023-10-05">2023-10-05</option>
                                <option value="2023-10-06">2023-10-06</option>
                                <option value="2023-10-07">2023-10-07</option>
                                <option value="2023-10-08">2023-10-08</option>
                                <option value="2023-10-09">2023-10-09</option>
                                <option value="2023-10-10">2023-10-10</option>
                            </select>
                        </div>
                        <div className='col-6 pr-4'>
                            <h6>Time</h6>
                            <select id="TimePick" name="TimePick" required>
                                <option value="" disabled selected>Select your time</option>
                                <option value="08:00">08:00 AM</option>
                                <option value="09:00">09:00 AM</option>
                                <option value="10:00">10:00 AM</option>
                                <option value="11:00">11:00 AM</option>
                                <option value="12:00">12:00 PM</option>
                                <option value="13:00">01:00 PM</option>
                                <option value="14:00">02:00 PM</option>
                                <option value="15:00">03:00 PM</option>
                                <option value="16:00">04:00 PM</option>
                                <option value="17:00">05:00 PM</option>
                                <option value="18:00">06:00 PM</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <div className="row px-0 py-4">
                                <img src="/images/drop-off-icon.png" className="mr-3"></img>
                                <h6 className="m-0 mt-1">Drop-Off</h6>
                            </div>
                        </div>
                        
                        <div className='col-6 pr-4'>
                        <h6>Locations</h6>
                            <select id="CityDrop" name="CityDrop" required>
                                <option value="" disabled selected>Select your city</option>
                                <option value="New York">New York</option>
                                <option value="Los Angeles">Los Angeles</option>
                                <option value="Chicago">Chicago</option>
                                <option value="Houston">Houston</option>
                                <option value="Phoenix">Phoenix</option>
                                <option value="Philadelphia">Philadelphia</option>
                                <option value="San Antonio">San Antonio</option>
                                <option value="San Diego">San Diego</option>
                                <option value="Dallas">Dallas</option>
                                <option value="San Jose">San Jose</option>
                            </select>
                        </div>
                        <div className='col-6 pb-4 pl-4'>
                            <h6>Date</h6>
                            <select id="DateDrop" name="DateDrop" required>
                                <option value="" disabled selected>Select your date</option>
                                <option value="2023-10-01">2023-10-01</option>
                                <option value="2023-10-02">2023-10-02</option>
                                <option value="2023-10-03">2023-10-03</option>
                                <option value="2023-10-04">2023-10-04</option>
                                <option value="2023-10-05">2023-10-05</option>
                                <option value="2023-10-06">2023-10-06</option>
                                <option value="2023-10-07">2023-10-07</option>
                                <option value="2023-10-08">2023-10-08</option>
                                <option value="2023-10-09">2023-10-09</option>
                                <option value="2023-10-10">2023-10-10</option>
                            </select>
                        </div>
                        <div className='col-6 pr-4'>
                            <h6>Time</h6>
                            <select id="TimeDrop" name="TimeDrop" required>
                                <option value="" disabled selected>Select your time</option>
                                <option value="08:00">08:00 AM</option>
                                <option value="09:00">09:00 AM</option>
                                <option value="10:00">10:00 AM</option>
                                <option value="11:00">11:00 AM</option>
                                <option value="12:00">12:00 PM</option>
                                <option value="13:00">01:00 PM</option>
                                <option value="14:00">02:00 PM</option>
                                <option value="15:00">03:00 PM</option>
                                <option value="16:00">04:00 PM</option>
                                <option value="17:00">05:00 PM</option>
                                <option value="18:00">06:00 PM</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>


            <div className='row p-4'>
                <div className='col-12 py-4 form-container'>
                    <div className='row p-0'>
                        <div className='col-12'>
                            <h5>Payment Method</h5> 
                        </div>
                        <div className='col-8 pr-4'>
                            <p><highlited-gray>Please enter your payment method</highlited-gray></p> 
                        </div>
                        <div className='col-4 pl-4 t-e'>
                            <p><highlited-gray>Step 3 of 4</highlited-gray></p>
                        </div>
                        <div className="col-12 pt-4">
                            <div className="row credit-card p-4">
                                <div className="col-12 p-0 mb-4">
                                    <div className="row credit-card-h">
                                        <img src="/images/pick-up-icon.png" className="mr-3"></img>
                                        <h6 className="m-0 mt-1">Credit Card</h6>
                                        <img className="ml-auto" src="/images/Visa.png"></img>
                                    </div>
                                </div>

                                <div className='col-6 pr-4'>
                                    <h6>Card Number</h6>
                                    <input className="credit-card-input" type="text" id="CardNumber" name="CardNumber" required  placeholder="Card Number"></input>
                                </div>
                                <div className='col-6 pb-4 pl-4'>
                                    <h6>Expration Date</h6>
                                    <input className="credit-card-input" type="text" id="CardDate" name="CardDate" required placeholder="DD/MM/YY"></input>
                                </div>
                                <div className='col-6 pr-4'>
                                    <h6>Card Holder</h6>
                                    <input className="credit-card-input" type="text" id="CardHolder" name="CardHolder" required  placeholder="Card holder"></input>
                                </div>
                                <div className='col-6 pl-4'>
                                    <h6>CVC</h6>
                                    <input className="credit-card-input" type="text" id="CardCvc" name="CardCvc" required  placeholder="CVC"></input>
                                </div>
                            </div>
                            
                            {/* <div className="col-12 my-4 p-0">
                                    <div className="row credit-card-h2">
                                        <input type="radio" id="PayPal" name="PayPal" value="PayPal"></input>
                                        <label for="PayPal">PayPal</label>
                                        <img className="ml-auto" src="/images/PayPal.png"></img>
                                    </div>
                            </div>
                            <div className="col-12 my-4 p-0">
                                    <div className="row credit-card-h2">
                                        <input type="radio" id="Bitcoin" name="Bitcoin" value="Bitcoin"></input>
                                        <label for="Bitcoin">Bitcoin</label>
                                        <img className="ml-auto" src="/images/Bitcoin.png"></img>
                                    </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className='row p-4'>
                <div className='col-12 py-4 form-container'>
                    <div className='row p-0'>
                        <div className='col-12'>
                            <h5>Confirmation</h5> 
                        </div>
                        <div className='col-8 pr-4'>
                            <p><highlited-gray>We are getting to the end. Just few clicks and your rental is ready!</highlited-gray></p> 
                        </div>
                        <div className='col-4 pl-4 t-e'>
                            <p><highlited-gray>Step 4 of 4</highlited-gray></p>
                        </div>
                        <div className="col-12">
                            <div className="col-12 my-4 p-0">
                                <div className="row credit-card-h2">
                                    <input type="checkbox" id="SendNews" name="SendNews" value="true"></input>
                                    <label for="sendNews">I agree with sending an Marketing and newsletter emails. No spam, promissed!</label>
                                </div>
                            </div>
                            <div className="col-12 my-4 p-0">
                                <div className="row credit-card-h2">
                                    <input type="checkbox" id="PrivacyPolicy" name="PrivacyPolicy" value="true"></input>
                                    <label for="privacyPolicy">I agree with our terms and conditions and privacy policy.</label>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 pb-3">
                            <input type="submit" className="PayButton" id="paybtn" name="paybtn" value="Rent Now"></input>
                        </div>
                        <div className="col-12 pb-3">
                            <img src="/images/shield.png" alt="" />
                        </div>
                        <div className="col-12">
                            <h6 className="m-0">All your data are safe</h6>
                            <p><highlited-gray>We are using the most advanced security to provide you the best experience ever.</highlited-gray></p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default PayForm;