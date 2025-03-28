import CarsData from "./CarsData";
import PopularCars from "./PopularCars/PopularCars";
import RecommendationCars from "./RecommendationCars/RecommendationCars";

const CarCards = () => {
    return(
        <>
            <section class="cars-cards">
                <PopularCars/>
                <RecommendationCars CarsData = {CarsData}/>
            </section>
        </>
    );
};

export default CarCards;