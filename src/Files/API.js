//import {useEffect} from 'react';


export const register = async(newUser)=>{	 
            fetch("http://localhost:9000/register",{
                   method:'POST',
                   headers:{
                   	  'content-type':'application/json'
                   },
                   body:JSON.stringify(newUser)
            })
}


export const login = async(existingUser) =>{
	    fetch("http://localhost:9000/login",{
                method:'POST',
                headers:{
                     'content-type':'application/json'
                },
                body:JSON.stringify(existingUser)
           })
}