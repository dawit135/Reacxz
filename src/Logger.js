import './App.css'
import {useReducer} from 'react';


const currentState = {
     email:"",
     password:""
}


const loginFunction = (state,action)=>{
     if(action.type === "doneForm")
     {
        console.log("form submit")
     }

     if(action.type === "doneEmail")
     {
        const stuff = action.current
        console.log(stuff.value)
     }
     return state
}


const Login = ()=>{

   const[state,dispatch] = useReducer(loginFunction,currentState)
   console.log(state)
	return (
            <div>
               <form className="loginForm" onSubmit={()=>dispatch({'type':'doneForm'})}>
                   <h3>Login</h3>
                   <label htmlFor="eml">Email:</label>
                   <input type="email" placeholder="Email" id="eml" className="emailLogin" onChange={(e)=>dispatch({'type':'doneEmail','current':e.target})}/>
                   <label htmlFor="psw">Password:</label>
                   <input type="password" placeholder="Password" id="psw" className="passwordLogin"/>
                   <button>Login</button>
               </form>
            </div>
 
		)
}

export default Login;