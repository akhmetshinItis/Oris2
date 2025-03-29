import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = (props) => {
    return (
        <div className="card p-3">
            <div className="row">
                <div className="col-10">
                    <h5 className="name">{props.name}</h5>
                    <h6 className="car-class highlited-gray">{props.type}</h6>
                </div>
                <i className="fa-solid fa-heart col-2 fa-2x"></i>
            </div>
            <div className="car-img-container px-4">
                <img src={props.image} className="car-img" alt={props.name} />
            </div>
            <div className="row car-info mt-2">
                <div className="col-3 row justify-content-center">
                    <i className="fa-solid fa-gas-pump"></i>
                    <p className="highlited-gray">{props.liters}</p>
                </div>
                <div className="col-4 row justify-content-center">
                    <i className="fa-solid fa-crosshairs"></i>
                    <p className="highlited-gray">{props.transmission}</p>
                </div>
                <div className="col-5 row justify-content-center">
                    <i className="fa-solid fa-user"></i>
                    <p className="highlited-gray">{props.spaces}</p>
                </div>
            </div>
            <div className="row mb-3 mt-5 justify-content-center">
                <div className="col-7 p-0">
                    <p className="price text-start">{props.price}/<span className="highlited-gray">day</span></p>
                   
                </div>
                <div className="abutton col-5 text-end"><Link to={`/cardetail/${props.id}`}>Rent now</Link></div>
            </div>
        </div>
    );
};

export default CarCard;
