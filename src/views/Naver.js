import React from 'react';
import { Link } from "react-router-dom";

import '../Files/App.css';

const Naver = ()=>{
	return(
           <div className="navigation">
             <div>
                <Link to="/home" className="homeLink">Home</Link>
             </div>
             <div>
                <Link to="/login" className="loginLink">Login</Link>
                <Link to="/register" className="registerLink">Register</Link>
             </div>
           </div>

		)
}


export default Naver