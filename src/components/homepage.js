import React from 'react'
import { Link } from 'react-router-dom'
import HomepageNav from './homepageNav'

function Homepage(){
    return(
        <div className='homepage'>
            <HomepageNav/>
            <div className="home-display">
                <h2>Do you need to check in your location or find a new desination?</h2>
                <div className="home-options">
                    <Link to='/search'>
                        <button>Search</button>
                    </Link>
                    <Link to='/checkIn'>
                        <button>Check in</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage