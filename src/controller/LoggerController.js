import {login} from '../Files/API.js'



const LoginFunction = (state,action)=>{
     if(action.type === "doneForm")
     {
        action.current.preventDefault()
        login(state)
        action.current.target.reset()
        return state
     }

     if(action.type === "doneEmail")
     {
        return {...state,email:action.current.value}
     }


     if(action.type === "donePassword")
     {
         return {...state,password:action.current.value}
     }

}

export default LoginFunction;