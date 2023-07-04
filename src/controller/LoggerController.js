import {login} from '../Files/API.js'



const LoginFunction = (state,action)=>{
     

     if(action.type === "doneEmail")
     {
        return {...state,email:action.current.value}
     }


     if(action.type === "donePassword")
     {
         return {...state,password:action.current.value}
     }


     if(action.type === "doneForm")
     {

        action.current.preventDefault()
        if(state.email === "" || state.password === "")
        {
             console.log("ERROR")
             return state
        }
        else{

             login(state)
             action.current.target.reset()
             return {...state,email:"",password:""}

        }
        
     }

}

export default LoginFunction;