const CarCard = ({name, cathegory, img, liters, transmission, spaces, price}) => {
    return(
    <div className="card p-3">
        <div className="row">
            <div className="col-10">
                <h5 className="name">{name}</h5>
                <h6 className="car-class highlited-gray">{cathegory}</h6> 
            </div>
            <i className="fa-solid fa-heart col-2 fa-2x"></i>
        </div>
        <div className="car-img-container px-4">
            <img src={img} className="car-img"/>
        </div>
        <div className="row car-info mt-2">
            <div className="col-3 row justify-content-center">
                <i className="fa-solid fa-gas-pump"></i>
                <p className="highlited-gray">{liters}L</p>
            </div>
            <div className="col-4 row justify-content-center">
                <i className="fa-solid fa-crosshairs"></i>
                <p className="highlited-gray">{transmission}</p>
            </div>
            <div className="col-5 row justify-content-center">
                <i className="fa-solid fa-user"></i>
                <p className="highlited-gray">{spaces} People</p>
            </div>
        </div>
        <div className="row mb-3 mt-5 justify-content-center">
            <p className="price col-7 text-start align-items-center d-flex">${price}/<highlited-gray>day</highlited-gray></p>
            <a className="abutton col-5 text-end">Rent now</a>
        </div>
    </div>
    );
};

export default CarCard;