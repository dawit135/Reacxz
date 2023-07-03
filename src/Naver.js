
import React from 'react';
import { Link } from "react-router-dom";

import './App.css';

const Naver = ()=>{
	return(
           <div>
             <div>
                <Link to="/home" className="homeLink">Home</Link>
             </div>
             <div>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
             </div>
           </div>

		)
}


export default Naver