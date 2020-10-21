import React from 'react'
import {Link } from 'react-router-dom'

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
                <a href='#'>Go back to register</a>
            </Link>
        </form>
    </div>)
}

export default Login