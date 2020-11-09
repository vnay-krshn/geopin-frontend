import React from 'react'
import Footer from './footer'
import '../css/contact.css'

const Contact=()=>{
    return(
    <div className="footer-align">
        <div className="footer">
            <form className="footer-form">
                    <input type="text" placeholder="Name"></input>
                    <input type="email" placeholder="Email"></input>
                    <textarea placeholder="Message"></textarea>
                    <button type="submit">SEND</button>
            </form>
            <div className="footer-details">
                <div className="footer-details-type">
                    <label>Email <pre>    :</pre></label>
                    <label>Phone <pre>   :</pre></label>
                    <label>Skype<pre>    :</pre></label>
                    <label>Address<pre>  :</pre></label>
                </div>
                <div className="footer-details-info">
                    <label>geo@geo.com</label>
                    <label>+91 9446578987</label>
                    <label>geopinloger</label>
                    <label id="addr">Building name, Streetname and Zip code<br></br>885865424</label>
                </div>
            </div>
        </div>
        <Footer/>       
    </div>)
}

export default Contact