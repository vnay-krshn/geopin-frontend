import React from 'react'
import { Link } from 'react-router-dom'

function HomepageNav(){
    return(
    <div>
        <nav className="homepage-nav">
                <Link to='/'>
                    <img src={'imgs/logo_inner_page.svg'}></img>
                </Link>
                <ul>
                    <img src={'imgs/user_image_bitmap.svg'}></img>
                    <Link to='/userProfile' style={{textDecoration:'none'}}>
                        <li>Joseph Pete</li>
                    </Link>
                    <li>Logout</li>
                </ul>
            </nav>
    </div>)
}

export default HomepageNav