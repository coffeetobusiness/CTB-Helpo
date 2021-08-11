import React,{ useState,useContext,}  from 'react';
import {  CredentialsContext } from '../../App';

import { useHistory } from 'react-router';


function VerifyButton(){

    const [ credentials, ] = useContext(CredentialsContext)
    const [error, setError] = useState("");
    const email = credentials.email;

    const PostData = (e)=>{
        console.log(error)
      e.preventDefault();
      fetch('http://localhost:4000/users/verifyclick',{
          method:"POST",
          headers:{
              "Content-Type":"application/json"
          },
          body:JSON.stringify({
              email
          })
      })
      .then(res=>res.json())
      .then((data) => {
          if(data.error){
              setError(data.error)
           }
           else{
              alert("Please check your email")
              console.log(data.message)
               history.push('/profile')
           }
      })
      .catch(error=>{
          console.log(error)
      })
  }
  const history = useHistory()

    return(
        <div className="mt-2">
         
         <button type="submit" onClick={PostData} className="btn btn-secondary ">Verify Email</button>
            
        </div>
    )
}
export default  VerifyButton;