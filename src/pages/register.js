import React from 'react'
import {Link } from 'react-router-dom'


const Register=()=>{
    return(
        <div className="register">
            <Link to='/'>
                <img src='/imgs/logo.svg'></img>
            </Link>
            <div className="register-box">
                <h3>REGISTER</h3>
                <form className="register-form">
                    <input placeholder="Name"></input>    
                    <input placeholder="Email"></input>   
                    <div className="phone">
                        <select>
                            <option>India</option>
                            <option>USA</option>
                        </select>
                        <input placeholder="Phone number"></input>
                    </div>
                    <input placeholder="Password"></input> 
                    <input placeholder="Confirm Password"></input> 
                    <Link to='/login'>
                        <button>CREATE AN ACCOUNT</button>  
                    </Link>
                    <label>
                        Already have an account?
                        <Link to='/login'>
                            <a>Login</a>
                        </Link>
                    </label>
                </form>      
            </div> 
      </div>)
}

export default Register