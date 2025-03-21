import './App.css';
import HomeRent from './Pages/HomeRent.jsx';
import DetailCar from './Pages/DetailCar.jsx';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path='MainPage' element={<HomeRent />}/>
        <Route path='DetailCar' element={<DetailCar />}/>
      </Routes>
    </div>
  );
};

export default App;
