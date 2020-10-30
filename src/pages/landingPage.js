import React from 'react'
import Contact from '../comp/contact';
import HowItWorks from '../comp/howItWorks';
import {animateScroll as scroll} from 'react-scroll'
import {Link} from 'react-router-dom'

const Landingpage=()=>{

  const toggleMid=()=>{
        scroll.scrollTo(550)
    }
  
  const toggleBttm=()=>{
      scroll.scrollToBottom()
  }

    return(
        <div className="landingpage">
            <div className="landingpage-main">
                <nav className="landing-nav">
                    <ul>
                        <li onClick={toggleMid}>How it works</li>
                        <li onClick={toggleBttm}>Contact</li>
                        <Link to='/register'>
                             <a><img id="login-button" src='/imgs/login_link.png'></img></a>
                        </Link>
                    </ul>
                </nav>
                <img id='logo' src='/imgs/logo_landing_page_banner.png'></img>
                <div className="tagline">
                    <h1>KNOW YOUR DESTINATION AND PIN YOUR ROUTES</h1>
                    <button>GET STARTED</button>
                </div> 
            </div>
            <HowItWorks/>
            <Contact/>
        </div>
    )
}

export default Landingpage