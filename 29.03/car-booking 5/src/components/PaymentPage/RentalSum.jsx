const RentalSum = ({car}) => {
  return (
      <div className="row p-4">
          <div className="col-12 bg-white rounded shadow-sm p-4 form-container" style={{ maxHeight: '500px', width: '600px'}}>
              <div className="Rental-h">
                  <h5>Rental Summary</h5>
                  <p className="text" style={{color: '#90A3BF'}}>Prices may change depending on the length of the rental and the price of your rental car.</p>
              </div>
              <div className="row rent-name-img">
                  <div className="rental-img-container mr-4">
                      <img src={car.image} alt=""/>
                  </div>
                  <div className="rental-name ml-4">
                        <h1 className="pb-3">{car.name}</h1>
                        <div className="rating d-flex align-items-center gap-3 mb-5">
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star text-warning"></i>
                            <i className="fas fa-star-half-alt text-warning"></i>
                            <span className="text-muted">440+ Reviewer</span>
                        </div>
                    </div>
              </div>
              <div className="row mt-4">
                  <div className="col-6 p-0">
                      <p className="text" style={{color: '#90A3BF'}}>Subtotal</p>
                  </div>
                  <div className="col-6 t-e p-0">
                      <p>${car.price}</p>
                  </div>
                  <div className="col-6 p-0">
                      <p className="text" style={{color: '#90A3BF'}}>Tax</p>
                  </div>
                  <div className="col-6 t-e p-0">
                      <p>$0.00</p>
                  </div>
                  <div className="col-12 row mt-4">
                      <div>
                          <h5>Total Rental Price</h5>
                          <p className="text" style={{color: '#90A3BF'}}>Overall price and includes rental discount</p>
                      </div>
                      <div className="ml-auto">
                          <h1 className="mb-0 mt-1">${car.price}</h1>
                      </div>
                  </div>

              </div>

          </div>
      </div>
  );
};

export default RentalSum;

//AHMEDVARD