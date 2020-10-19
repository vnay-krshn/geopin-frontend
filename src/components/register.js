import React from 'react'
import {BrowserRouter as Router, Link, Route } from 'react-router-dom'


function Register(){
    return(
    <div className="register">
        <h2>Register</h2>
        <form>
            <input placeholder="name"></input>    
            <input placeholder="email"></input>   
            <input placeholder="password"></input> 
            <Link to='/login'>
                <button>Submit</button>  
            </Link>
            <Link to='/login'>
                <a>Go to login page</a>
            </Link>
        </form>        
    </div>)
}

export default Register