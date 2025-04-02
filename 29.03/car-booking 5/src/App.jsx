import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import Layout from './layouts/Layout'; 
import CarDetail from './pages/CarDetail';
import PayPage from './pages/PayPage';
import PaymentCar from './pages/PaymentCar';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="category" element={<Category />} />
                    <Route path="cardetail/:id" element={<CarDetail/>} />
                    <Route path="rent/:id" element={<PayPage />} />
                    <Route path='PaymentCar/:id' element={<PaymentCar />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;