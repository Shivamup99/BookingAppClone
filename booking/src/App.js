import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import './App.css';
import SingleHotel from './component/hotelList/SingleHotel';
import Home from './pages/Home'
import HotelList from './pages/HotelList';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotel-list' element={<HotelList/>}/>
        <Route path='/hotel/:id' element={<SingleHotel/>}/>
      </Routes>
    </Router>
  );
}

export default App;
