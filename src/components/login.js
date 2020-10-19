import React from 'react'
import {BrowserRouter as Router, Link, Route } from 'react-router-dom'

function Login(){

    return(
    <div className="login">
        <h2>Login</h2>
        <form>
            <input placeholder="name"></input>    
            <input placeholder="password"></input> 
            <Link to='/homepage'>
                <button>Login</button>  
            </Link>
            <Link to='/register'>
                <a>Go back to register</a>
            </Link>
        </form>
    </div>)
}

export default Login