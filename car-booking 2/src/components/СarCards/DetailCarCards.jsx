import CarCard from "./CarCard/CarCard";
import CarsData from "./CarsData";

const DetailCarCards = () => {
    return(
        <>
            <div className="cars-row">
                {CarsData.map(car => (
                    <div className="col-10 offset-1 col-md-4 offset-md-0 p-3">
                    <CarCard
                            name={car.name}
                            cathegory={car.category}
                            img={car.img}
                            liters={car.liters}
                            transmission={car.transmission}
                            spaces={car.spaces}
                            price={car.price}
                        />
                </div>
                ))}
            </div>
            <div className="row">
                <a className="abutton col-2 offset-5 my-4">Show more cars</a>
                <p className="highlited-gray col-1 offset-4 align-items-center d-flex justify-content-end">120</p>
            </div>
        </>
    );
};

export default DetailCarCards;