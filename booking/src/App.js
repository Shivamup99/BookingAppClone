import React from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import './App.css';
import SingleHotel from './component/hotelList/SingleHotel';
import Login from './pages/auth/Login';
import Home from './pages/Home'
import HotelList from './pages/HotelList';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotel' element={<HotelList/>}/>
        <Route path='/hotel/:_id' element={<SingleHotel/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
