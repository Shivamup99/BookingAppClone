import React, { useContext } from 'react'
import { AuthContext } from '../context/authContext'
import './component.css'

function Navbar() {
  const {user} = useContext(AuthContext)
  return (
    <div className="navbar">
        <div className="navContainer">
            <span className='logo'>DUNES CITY</span>
            {user ?<span style={{textTransform:'uppercase',letterSpacing:'2px',color:'#f8f8f8'}}>{user.username}</span> :
             <div className="navItems">
             <button className='navButton'>Register</button>
             <button className='navButton'>Login</button>
             </div>
            }
            </div>
        </div>
  )
}

export default Navbar