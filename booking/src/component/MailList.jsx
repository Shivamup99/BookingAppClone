import React from 'react'

function MailList() {
  return (
   <div className="mail">
       <h1 className="mailTitle">Save time, save money!</h1>
       <span className="mailDesc">Sign up and we'll send the best deals to you</span>
       <div className="mailInput">
           <input type='text' placeholder='your email' />
           <button>Subscribe</button>
           </div>
       </div>
  )
}

export default MailList