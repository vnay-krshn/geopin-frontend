import React, { useContext } from 'react'
import {Link } from 'react-router-dom'
import Dropdown from '../comp/dropdown'
import { OptionsContext } from '../comp/optionsContext'
import {countriesData} from '../mockData/countriesData'


const Register=()=>{

    const {nationality} = useContext(OptionsContext)
    const[country, setcountry] = nationality

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
                        <Dropdown options={countriesData} value={country} onChange={(v)=>setcountry(v)}/>
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
                            Login
                        </Link>
                    </label>
                </form>      
            </div> 
      </div>)
}

export default Register