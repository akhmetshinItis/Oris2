import CarCard from "../CarCard/CarCard";
import CarsData from "../CarsData";

const RecommendationCars = () => {
    return(
        <>
        <h4 className="highlited-gray">Recomendation cars</h4>
            <div className="recomendation-cars row">
                {CarsData.map(car => (
                    <div className="col-10 offset-1 col-lg-6 offset-lg-0 col-xl-3 car p-3">
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

export default RecommendationCars;