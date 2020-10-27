import React from 'react'


function Contact(){
    return(
    <div className="footer">
        <form className="footer-form">
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email"></input>
                <textarea placeholder="Message"></textarea>
                <button type="submit">SEND</button>
         </form>
         <div className="footer-details">
             <div className="footer-details-type">
                <label>Email</label>
                <label>Phone</label>
                <label>Skype</label>
                <label>Address</label>
             </div>
            <div className="footer-details-colon">
                <label>:</label>
                <label>:</label>
                <label>:</label>
                <label>:</label>
            </div>
            <div className="footer-details-info">
                <label>geo@geo.com</label>
                <label>+91 9446578987</label>
                <label>geopinloger</label>
                <label id="addr">Building name, Streetname and Zip code<br></br>885865424</label>
            </div>
         </div>
    </div>)
}

export default Contact