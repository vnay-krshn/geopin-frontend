import React from 'react'

function HomepageNav(){
    return(
    <div>
        <nav className="homepage-nav">
                <img src={'imgs/logo_inner_page.svg'}></img>
                <ul>
                    <img src={'imgs/user_image_bitmap.svg'}></img>
                    <li>Joseph Pete</li>
                    <li>Logout</li>
                </ul>
            </nav>
    </div>)
}

export default HomepageNav