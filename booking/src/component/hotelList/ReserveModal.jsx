import { faCircle, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import React, { useContext, useState } from 'react'
import { SearchContext } from '../../context/searchContext'
import useFetch from '../../context/useFetch'
import './modal.css'
function ReserveModal({setOpen,hotelId}) {
    const {data,loading} = useFetch(`http://localhost:8000/api/hotel/rooms/${hotelId._id}`)
    const [selectedRoom,setSelectedRoom] = useState([])
    const {dates} = useContext(SearchContext)
    const handleSlectRoom =(e)=>{
      const checked = e.target.checked;
      const value = e.target.value;
      setSelectedRoom(checked?[...selectedRoom,value]:selectedRoom.filter((item)=>
       item !==value 
      ))
    };
    const getDatesInRange =(startDate,endDate)=>{
        const start = new Date(startDate)
        const end = new Date(endDate)
        const date = new Date(start.getTime());
        const dates = [];
        while (date<=end){
            dates.push(new Date(date).getTime())
            date.setDate(date.getDate()+1)
        }
        return dates
    }
    const alldates = getDatesInRange(dates[0].startDate,dates[0].endDate)
    
    const isAvailableRoom =(roomNumber)=>{
        const isFound = roomNumber.unavailableDates.some((date)=>
        alldates.includes(new Date(date).getTime())
        );
        return !isFound;
    }
    
    const handleRoom = async()=>{
       try {
            await Promise.all(selectedRoom.map((roomId)=>{
               const response = axios.put(`http://localhost:8000/api/room/availability/${roomId}`,{dates:alldates})
               return response.data
            }))
            setOpen(false)
       } catch (error) {
           console.log(error)
       }
    }
    return (
    <div className='reserve'>
        <div className="rcontainer">
            <FontAwesomeIcon icon={faCircleXmark} className='rClose'
            onClick={()=>setOpen(false)}
            />
            <span>Select your rooms :</span>
            {data && data.map(item=>(
                <div className="rItem" key={item._id}>
                    <div className="rItemInfo">
                        <div className="rTitle">{item?.title}</div>
                        <div className="rdes">{item?.desc}</div>
                        <div className="rMax">Max People: <b>{item?.maxPeople}</b></div>
                        <div className="rPrice">$ {item?.price}</div>
                        <div className="rSelectRoom">
                        {item.roomNumbers.map((roomNumber,i)=>(
                            <div className="room" key={i}>
                               <label>{roomNumber.number}</label>
                               <input type='checkbox' disabled={!isAvailableRoom(roomNumber)} value={roomNumber._id} onChange={handleSlectRoom}/>
                            </div>
                        ))}

                        </div>
                       
                    </div>
                </div>
            ))}
            <button onClick={handleRoom} className='rButton'>Reserve Now</button>
        </div>
    </div>
  )
}

export default ReserveModal