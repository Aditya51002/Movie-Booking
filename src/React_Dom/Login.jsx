import React, { useState } from "react";
import { Router, useNavigate } from "react-router-dom";

export default function Login(){
    const[emailId, setEmaailId]= useState('')
    const[password, setPassword]=useState('')

    const navigate = useNavigate()
    const loginHandle=()=>{
        
    }


    const loginHandle=()=>{

        const userData= JSON.parse(localStorage.getItem(users))
        if(userData.emailId===emailId){

        }
    }

    return(
        <div>
            <div>Login</div>
            <label>Email
                <input type="email" onChange={}
            </label>
        </div>
    )
}