import React, { useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from "date-fns";
import {
  faBed,
  faCalendarDays,
  faCar,
  faLocationPinLock,
  faPeopleArrows,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../context/searchContext";
import { AuthContext } from "../context/authContext";
function Header({type}) {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
   
  const [openDate,setOpenDate] = useState(false)
  const [openOptions,setOpenOptions] = useState(false)
  const [options,setOptions] = useState({adult:1,children:0,room:1})
  const [destination,setDestination] = useState('')

  const handleOption=(name,opteration)=>{
    setOptions((previous)=>{
        return{
            ...previous, [name]: opteration==='i' ? options[name] +1 : options[name]-1
        }
    })
  }
  const {dispatch} =  useContext(SearchContext)
  const handleSearch= ()=>{
    dispatch({type:'NEW_SEARCH',payload:{destination,dates,options}})
    navigate('/hotel',{state:{destination , dates ,options}})
  }

  return (
    <>
      <div className="header">
        <div className={type==='list'? "headerContainer listmode":"headerContainer"}>
          <div className="headerList">
            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span>Stays</span>
            </div>
            <div className="headerListItem ">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car Rentals</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport Taxi</span>
            </div>
            <div className="headerListItem">
              <FontAwesomeIcon icon={faPeopleArrows} />
              <span>Attractions</span>
            </div>
          </div>
         {
           type !=='list' &&(
               <>
                <h1 className="headerTitle">Looking For Some Enjoy ?</h1>
          <p className="headerDesc">
            People think being famous is so glamorous, but half the time you're
            in a strange hotel room living out of a suitcase.
          </p>
          {
            user ?'':  <button className="headerBtn">Sign In / Register</button>
          }
          <div className="headerSearch">
            <div className="headerSearchItem">
              <FontAwesomeIcon
                icon={faLocationPinLock}
                className="headerIcon"
              />
              <input
                type="text"
                placeholder="where are you going"
                className="headerSearchInput"
                onChange={(e)=>setDestination(e.target.value)}
              />
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
              <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(dates[0].startDate, 'MM/dd/yyyy')} to ${format(dates[0].endDate, 'MM/dd/yyyy')}`}</span>
              {openDate && (
                  <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDates([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  className='date'
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="headerSearchItem">
              <FontAwesomeIcon icon={faPerson} className="headerIcon" />
              <span onClick={()=>setOpenOptions(!openOptions)} className="headerSearchText">{`${options.adult} adults ${options.children} children ${options.room} rooms` }</span>
              {openOptions && (
                  <div className="options">
                  <div className="optionItem">
                      <span className="optionText">adults</span>
                       <div className="optionCount">
                       <button className="optionCounterButton" disabled={options.adult<=1} onClick={()=>handleOption('adult','d')}>-</button>
                      <span className="CounterNumber">{options.adult}</span>
                      <button className="optionCounterButton" onClick={()=>handleOption('adult','i')}>+</button>
                        </div>
                      </div>
                      <div className="optionItem">
                      <span className="optionText">children</span>
                      <div className="optionCount">
                      <button className="optionCounterButton" disabled={options.children<=1} onClick={()=>handleOption('children','d')}>-</button>
                      <span className="CounterNumber">{options.children}</span>
                      <button className="optionCounterButton" onClick={()=>handleOption('children','i')}>+</button>
                     </div>
                      </div>
                      <div className="optionItem">
                      <span className="optionText">rooms</span>
                      <div className="optionCount">
                      <button className="optionCounterButton" disabled={options.room<=1} onClick={()=>handleOption('room','d')}>-</button>
                      <span className="CounterNumber">{options.room}</span>
                      <button className="optionCounterButton" onClick={()=>handleOption('room','i')}>+</button>  
                    </div>
                      </div>
                  </div>
            
              )}
              </div>
            <div className="headerSearchItem">
              <button className="headerBtn" onClick={handleSearch}>Search</button>
            </div>
          </div>
               </>
           )
         }
        </div>
      </div>
    </>
  );
}

export default Header;
