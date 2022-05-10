import axios from "axios";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import './auth.css'

function Login() {
  const navigate = useNavigate()
  const [login, setLogin] = useState({ email: undefined, password: undefined });
  const { loading, error, dispatch } = useContext(AuthContext);
  const handleChange = (e) => {
    setLogin((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const handleClick =async(e)=>{
    e.preventDefault();
    dispatch({type:'LOGIN_START'});
    try {
        const response = await axios.post('http://localhost:8000/api/login',login);
        dispatch({type:'LOGIN_SUCCESS',payload:response.data});
        navigate('/')
    } catch (error) {
        dispatch({type:'LOGIN_FAILURE',payload:error.response.data})
    }
    
  }
  return (
      <div className='bg-img'>
       <form onSubmit={handleClick} className="container">
           <h1>Check Your Bookings</h1>
        <div className="login">
        <div className="lcontainer">
        <input
          type="text"
          placeholder="Enter Email"
          id="email"
          onChange={handleChange}
          className="linput"
          required
        />
        <input
          type="password"
          placeholder="Enter Password"
          id="password"
          onChange={handleChange}
          className="linput"
          required
        />
        <button disabled={loading} type="submit" className="lbutton">Login</button>
        {error && <span>{error.message}</span>}
      </div>
      <Link className="links" to='/register'>Don't have account ? sign up</Link>
      </div>
        </form>
      </div>
  );
}

export default Login;
