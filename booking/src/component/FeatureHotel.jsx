import React from 'react'
import useFetch from '../context/useFetch'

function FeatureHotel() {
    const {data,loading,error} = useFetch('http://localhost:8000/api/hotel/countByCity?cities=Kharghar,delhi')
    console.log(data)
  return (
    <div className='featured'>
        {loading ? "Loading Please wait":
        <>
        <div className="featureItem">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlqUG0oYxJDQnU3Y8CvzFW9vXkOVFEqCBcQ&usqp=CAU' alt='dddd' className='featureImg'/>
        <div className="featureTitles">
            <h1>Kharghar</h1>
            <h4>{data[0]} Property</h4>
            </div>
            </div>

            <div className="featureItem">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlqUG0oYxJDQnU3Y8CvzFW9vXkOVFEqCBcQ&usqp=CAU' alt='dddd' className='featureImg'/>
        <div className="featureTitles">
            <h1>Delhi</h1>
            <h4>{data[1]} Property</h4>
            </div>
            </div>

            <div className="featureItem">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlqUG0oYxJDQnU3Y8CvzFW9vXkOVFEqCBcQ&usqp=CAU' alt='dddd' className='featureImg'/>
        <div className="featureTitles">
            <h1>Dublin</h1>
            <h4>334 Property</h4>
            </div>
            </div>

            <div className="featureItem">
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlqUG0oYxJDQnU3Y8CvzFW9vXkOVFEqCBcQ&usqp=CAU' alt='dddd' className='featureImg'/>
        <div className="featureTitles">
            <h1>Dublin</h1>
            <h4>334 Property</h4>
            </div>
            </div>
        </>
        }
        </div>
  )
}

export default FeatureHotel