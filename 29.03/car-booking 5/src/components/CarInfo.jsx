import React from "react";

const CarInfo = ({ car }) => {
  return (
    <div className="container-fluid mb-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="banner-content" style={{ backgroundColor: "#3563E9", height: "360px", margin: "40px 0 0 0", borderRadius: "10px"}}>
            <div className="p-4 text-white">
              <h2 className="fw-bold">{car.name} </h2>
              <img src={car.image} alt="Current Car" className="carImg"/>
            </div>
          </div>

          {/* Миниатюры */}
          <div className="thumbnails mt-3 row">
            <div className="col-4 pl-0">
                <img src={car.image} alt={car.name} className="rounded border border-primary" style={{ backgroundColor: "blue" }} />
            </div>
            <div className="col-4 px-0">
                <img src="/images/salon1.png" alt={car.name} className="rounded border border-primary" />
            </div>
            <div className="col-4 pr-0">
                <img src="/images/salon2.png" alt={car.name} className="rounded border border-primary" />
            </div>
          </div>
        </div>

        {/* Правая колонка */}
        <div className="col-md-6">
          <div className="card rounded p-4">
            <h1 className="card-title fw-bold">{car.name}</h1>
            <div className="rating d-flex align-items-center gap-3 mb-5">
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star text-warning"></i>
              <i className="fas fa-star-half-alt text-warning"></i>
              <span className="text-muted">440+ Reviewer</span>
            </div>
            <p className="card-text text-muted">
              {car.description}
            </p>

            {/* Характеристики */}
            <div className="row mt-4">
              <div className="col-3">
                <p style={{color: "#90A3BF"}}>Type Car</p>
                <p style={{color: "#90A3BF"}}>Steering</p>
              </div>
              <div className="col-3">
                <p>{car.type}</p>
                <p>{car.transmission}</p>
              </div>
              <div className="col-3">
                <p style={{color: "#90A3BF"}}>Capacity</p>
                <p style={{color: "#90A3BF"}}>Gasoline</p>
              </div>
              <div className="col-3">
                <p>{car.spaces}</p>
                <p>{car.liters}</p>
              </div>
            </div>

            {/* Цена и кнопка */}
            <div className="d-flex justify-content-between align-items-center mt-5">
              <h2 className="fw-bold price">{car.price} /<span className="highlited-gray">day</span></h2>
              
              <a href="#" className="btn btn-primary btn-lg">Rent Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarInfo;
