import './App.css';
import HomeRent from './Pages/HomeRent.jsx';
import DetailCar from './Pages/DetailCar.jsx';
import { Routes, Route, Router } from 'react-router-dom';
import Layout from './Layout/Layout.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
          <Route path="home" element={<HomeRent />} />
          <Route path="/" element={<HomeRent />} />
          <Route path="details" element={<DetailCar />} />
        </Route>
    </Routes>
  );
};

export default App;
