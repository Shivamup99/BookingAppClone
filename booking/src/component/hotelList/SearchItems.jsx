import React from 'react'
import {Link} from 'react-router-dom'
function SearchItems({item}) {
  console.log('city',item)
  return (
    <div className='searchItem'>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fJu7YZJURxr_uAiu3srKMQbWQx48BdXcVQ&usqp=CAU' alt='ddd' className='searchItemImg'/>
     <div className="searchItemDesc">
         <h1 className="siTitle">{item.name}</h1>
         <span className="siDistance">{item.distance} m. from your location</span>
         <span className="siTaxiOp">Free airport taxi</span>
         <span className="siSubtitle">Studio Apartment with air conditioning</span>
         <span className="siFeature">{item.description}</span>
         <span className="siCancelOp">Free cancellation</span>
         <span className="siCancelOpSubtitle">
             You can cancel later so luck in this great price today !
             </span>
         </div>
         <div className="siDetails">
           {item.rating &&
             <div className="siRating">
                 <span>Excelent</span>
                 <button>{item.rating}</button>
                 </div>
                 }
                 <div className="siDetailTexts">
                     <span className="siPrice">$ {item.cheapestPrice}</span>
                     <span className="siTaxOp">Includes Taxes and fees</span>
                     <Link to={`/hotel/${item._id}`} >
                     <button className="headerBtn">See availbility</button>
                     </Link>
                     
                     </div>
             </div>
    </div>
  )
}

export default SearchItems