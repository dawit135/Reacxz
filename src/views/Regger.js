import {registerUser} from '../models/ReggerModel.js'
import {RegisterCont} from '../controller/ReggerController.js'
import {useReducer} from 'react';

const Register = ()=>{
    const[state,dispatch] = useReducer(RegisterCont,registerUser)
	return(
           <div>
                <form   className="doneReg" onSubmit={(e)=>{dispatch({'type':'regForm','current':e})}}>
                    <h3>Register</h3>
                    <label htmlFor="usr">Username:</label>
                    <input type="text" placeholder="username" className="userRegger" id="usr" value={state.username} onChange={(e)=>{dispatch({'type':'user','current':e})}}/>
                    <label htmlFor="eml">Email:</label>
                    <input type="email" placeholder="email" className="emailRegger" id="eml" value={state.email} onChange={(e)=>{dispatch({'type':'email','current':e})}}/>
                    <label htmlFor="psw">Password:</label>
                    <input type="password" placeholder="password" className="passwordRegger" id="psw" value={state.password} onChange={(e)=>{dispatch({'type':'password','current':e})}}/>
                    <label htmlFor="pswII">Password Confirmation:</label>
                    <input type="password" placeholder="password Confirmation" className="passwordConfirmationRegger" id="pswII" value={state.passwordConfirmation} onChange={(e)=>{dispatch({'type':'passwordConfirmation','current':e})}}/>
                    <button>Register</button>
                </form>
           </div>
		)
}


export default Register