import '../Files/App.css'
import {useReducer} from 'react';
import LoginFunction from '../controller/LoggerController.js'
import LogcurrentState from '../models/LoggerModel.js'

const Login = ()=>{

   const[state,dispatch] = useReducer(LoginFunction,LogcurrentState)
   
	return (
            <div>
               <form className="loginForm" onSubmit={(e)=>dispatch({'type':'doneForm','current':e})}>
                   <h3>Login</h3>
                   <label htmlFor="eml">Email:</label>
                   <input type="email" placeholder="Email" id="eml" className="emailLogin" onChange={(e)=>dispatch({'type':'doneEmail','current':e.target})}/>
                   <label htmlFor="psw">Password:</label>
                   <input type="password" placeholder="Password" id="psw" className="passwordLogin" onChange={(e)=>dispatch({'type':'donePassword','current':e.target})}/>
                   <button>Login</button>
               </form>
            </div>
 
		)
}

export default Login;