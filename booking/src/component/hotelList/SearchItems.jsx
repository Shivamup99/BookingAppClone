import React from 'react'

function SearchItems() {
  return (
    <div className='searchItem'>
    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7fJu7YZJURxr_uAiu3srKMQbWQx48BdXcVQ&usqp=CAU' alt='ddd' className='searchItemImg'/>
     <div className="searchItemDesc">
         <h1 className="siTitle">Tower Street Aparments</h1>
         <span className="siDistance">500m from center</span>
         <span className="siTaxiOp">Free airport taxi</span>
         <span className="siSubtitle">Studio Apartment with air conditioning</span>
         <span className="siFeature">Entire studio . 1 Bathroom . 21m/sq 1 full bed</span>
         <span className="siCancelOp">Free cancellation</span>
         <span className="siCancelOpSubtitle">
             You can cancel later so luck in this great price today !
             </span>
         </div>
         <div className="siDetails">
             <div className="siRating">
                 <span>Excelent</span>
                 <button>8.0</button>
                 </div>
                 <div className="siDetailTexts">
                     <span className="siPrice">$124</span>
                     <span className="siTaxOp">Includes Taxes and fees</span>
                     <button className="headerBtn">See availbility</button>
                     </div>
             </div>
    </div>
  )
}

export default SearchItems