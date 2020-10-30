import React from 'react'
import { Link } from 'react-router-dom'
import HomepageNav from '../comp/homepageNav'

const Homepage=()=>{
    return(
        <div className='homepage'>
            <HomepageNav/>
            <div className="home-display">
                <p>Do you need to check in your <strong>location</strong> or find a new <strong>desination</strong>?</p>
                <div className="home-options">
                    <Link to='/search'>
                        <button>SEARCH</button>
                    </Link>
                    <Link to='/checkIn'>
                        <button>CHECK IN</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage