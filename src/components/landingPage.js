import React from 'react'
import Contact from './contact';
import HowItWorks from './howItWorks';
import {animateScroll as scroll} from 'react-scroll'
import {Link} from 'react-router-dom'

function Landingpage(){

  const toggleMid=()=>{
        scroll.scrollTo(400)
    }
  
  const toggleBttm=()=>{
      scroll.scrollToBottom()
  }

    return(
        <div>
            <div className="landingpage">
                <nav className="landing-nav">
                    <ul>
                        <li onClick={toggleMid}>How it works</li>
                        <li onClick={toggleBttm}>Contact</li>
                        <Link to='/register'>
                             <a>Login</a>
                        </Link>
                    </ul>
                </nav>
            </div>
            <HowItWorks/>
            <Contact/>
        </div>
    )
}

export default Landingpage