import React,{ useContext,useEffect }  from 'react';
import {  CredentialsContext } from '../App';
//import './page.scss';
import Header from '../header/Header';
// <Link  to="/register">Register</Link>
export default function Home(){

    const [ credentials,setCredentials ] = useContext(CredentialsContext)

    const logout =() => {
        setCredentials('');/////////////:  null karna hai
    }

    useEffect(() => {
        fetch(`http://localhost:4000/users/home`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic ${credentials.email}:${credentials.password}`,
          },
        })
          .then((response) => response.json("auth done"))
      });

    return(
        <div className="app">
        <div><Header/></div> 
       {!credentials && <h3>Please LogIn........ </h3>}<br/><br/><br/>

       {credentials && <div>

        <h1>Welcome... {credentials.email}</h1>
        <button className="btn btn-danger" onClick={logout}>Logout</button>

        </div>
       
       }
       </div>
    )
}