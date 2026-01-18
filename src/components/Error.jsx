import React from 'react'
import { useRouteError } from 'react-router-dom';
import logo from '../assets/kitten1.png'

export const Error = () => {
    const err=useRouteError();
    console.log(err);
  return (
    <div style={{height: "100vh",
        width: "100vw",
      display:"flex", 
      flexDirection:"column",
      justifyContent:"center",
      alignContent:"center",
      textAlign:"center"}}>

    <h1>{err?.error?.message || err?.data}</h1>
        <h2 style={{color:"red"}}>Error {err?.status}:{err?.statusText}</h2>
        <div style={{
           height:"100vh",
           width:"100vw",
           display:"flex",
           justifyContent:"center",
           alignContent:"center"}}>
            <img src={logo} style={{height:"50%",borderRadius:"2rem",marginTop:"2rem"}}></img>
        </div>
      
    </div>
  )
}
