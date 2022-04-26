import React from 'react'
import Navbar from '../component/Navbar'
import Header from '../component/Header'
import FeatureHotel from '../component/FeatureHotel'
import PropertyList from '../component/PropertyList'
import HomeGuest from '../component/HomeGuest'
import MailList from '../component/MailList'
import Footer from '../component/Footer'
function Home() {
  return (
    <div>
    <Navbar/>
      <Header/> 
      <div className="homeContainer">
          <h1 className='homeTitle'>Browse by property type </h1>
          <PropertyList />
          <FeatureHotel />
          <h1 className='homeTitle'>Browse by property type </h1>
          <HomeGuest />
          <MailList/>
          <Footer/>
          </div>
    </div>
  )
}

export default Home