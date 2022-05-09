import React from 'react'
import useFetch from '../context/useFetch'

function HomeGuest() {
    const {data,loading} = useFetch('http://localhost:8000/api/hotel?featured=true&limit=4')
  return (
    <div className='fp'>
        {loading ?'Loading wait':
        <>
        {data.map((item,i)=>(
          <div className="fpItem" key={i}>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSODs-_1022evsLtWYH-Dy82IQVEH67L54BXw&usqp=CAU' alt='' className='fpImg'/>
          <span className='fpName'>{item.name}</span>
          <span className='fpCity'>{item.city}</span>
          <span className='fpPrice'>Starting at {item.cheapestPrice} Rs</span>
          {item.rating && 
            <div className="fpRating">
            <button>{item.rating}</button>
            <span>Super</span>
            </div>
          }
              </div>
        ))}
        </>
        }
       
        </div>
  )
}

export default HomeGuest