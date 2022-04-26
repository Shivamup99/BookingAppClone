import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import {format} from 'date-fns'
import { DateRange } from 'react-date-range'
import SearchItems from '../component/hotelList/SearchItems'
function HotelList() {
  const location = useLocation()
  const [destination,setDestination] = useState(location.state.destination)
  const [date,setDate] = useState(location.state.date)
  const [openDate,setOpenDate] = useState(false)
  const [options,setOptions] = useState(location.state.options)
  return (
    <>
    <Navbar/>
    <Header type='list'/>
    <div className="listContainer">
      <div className="listWrapper">
        <div className="listSearch">
          <h1 className="lsTitle">Search Hotel</h1>
          <div className="lsItem">
            <label>Destination</label>
            <input type='text' placeholder={destination}/>
            </div>

            <div className="lsItem">
            <label>Chek-in Date</label>
            <span onClick={()=>setOpenDate(!openDate)}>{`${format(date[0].startDate, 'MM/dd/yyyy')} to ${format(date[0].endDate, 'MM/dd/yyyy')}`}</span>
            {openDate && (
                <DateRange onChange={(item)=>setDate([item.selection])} minDate={new Date()} ranges={date}/>
            )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
              <div className="lsOptionsItem">
                <span className="lsItemText">Min price <small>per night</small></span>
                <input type="number" className="lsItemInput" />
                </div>

                <div className="lsOptionsItem">
                <span className="lsItemText">Max price <small>per night</small></span>
                <input type="number"  className="lsItemInput"/>
                </div>

                <div className="lsOptionsItem">
                <span className="lsItemText">adults </span>
                <input type="number" min={1} className="lsItemInput" placeholder={options.adult} />
                </div>
                <div className="lsOptionsItem">
                <span className="lsItemText">children </span>
                <input type="number" min={0} className="lsItemInput" placeholder={options.children} />
                </div>
                <div className="lsOptionsItem">
                <span className="lsItemText">rooms </span>
                <input type="number" min={1} className="lsItemInput" placeholder={options.room} />
                </div>
                </div>
              
              </div>
              <button className='headerBtn' style={{width:'100%'}}>Search</button>
          </div>
          <div className="listResult">
            <SearchItems />
            <SearchItems />
            <SearchItems />
            <SearchItems />
            <SearchItems />
            <SearchItems />
            <SearchItems />
            <SearchItems />
            <SearchItems />
            </div>
        </div>
      </div>
    
    </>
  )
}

export default HotelList