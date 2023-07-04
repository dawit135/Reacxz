import {register} from '../Files/API.js'



export const RegisterCont = (state,action)=>{

     switch(action.type){
     	   case 'user':
     	   		return {...state,username:action.current.target.value}
     	   	
     	   	case 'email':
     	   		return {...state,email:action.current.target.value}
     	   		
     	   	case 'password':
     	   		return {...state,password:action.current.target.value}
     	   	
     	   	case 'passwordConfirmation':
     	   		return {...state,passwordConfirmation:action.current.target.value}
     	   	
     	   	case 'regForm':
     	   		action.current.preventDefault()
     	   		if(state.password !== state.passwordConfirmation)
     	   		{
     	   			return {...state,password:"",passwordConfirmation:""}	
     	   		} 
     	   		else{
     	   			register(state)
     	   		     action.current.target.reset()
     	   		     return state
     	   		}
     	   	  	
		     default:
		     	console.log("Something went wrong")
		     	break;

     }


}