import React from 'react'
import {Link } from 'react-router-dom'

function Login(){

    return(
    <div className="login">
        <img src='/imgs/logo.svg'></img>
        <div className="login-box">
            <h3>LOGIN</h3>
            <form className="login-form">
                <input placeholder="Name"></input>    
                <input placeholder="Password"></input> 
                    <Link to='/homepage'>
                        <button>LOGIN</button>  
                    </Link>
                    <label>
                        Don't have an account?
                        <Link to='/register'>
                            <a>Register Now</a>
                        </Link>
                    </label>
            </form>
        </div>
    </div>)
}

export default Login