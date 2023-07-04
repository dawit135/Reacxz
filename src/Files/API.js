//import {useEffect} from 'react';



export const register = async(newUser)=>{
	   console.log(newUser)
	  

            fetch("http://localhost:9000/register",{
                   method:'POST',
                   headers:{
                   	  'content-type':'application/json'
                   },
                   body:JSON.stringify(newUser)
            })

}


export const login = async(existingUser) =>{
	    console.log(existingUser)
}