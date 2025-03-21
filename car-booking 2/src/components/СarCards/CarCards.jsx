import PopularCars from "./PopularCars/PopularCars";
import RecommendationCars from "./RecommendationCars/RecommendationCars";

const CarCards = () => {
    return(
        <>
            <section class="cars-cards">
                <PopularCars/>
                <RecommendationCars/>
            </section>
        </>
    );
};

export default CarCards;