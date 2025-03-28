import CarCard from "../CarCards/CarCard/CarCard";
import PopularCars from "../CarCards/PopularCars/PopularCars";
import MainPage from "../Pages/MainPage";
import { Routes, Route } from 'react-router-dom';

function Layout(){
    return (
        <Routes>
            <Route path="MainPage" element={<MainPage/>}/>
            <Route path="/" element={<MainPage/>}/>
            <Route path="details" element={<PopularCars/>}/>
        </Routes>
    );
}

export default Layout;