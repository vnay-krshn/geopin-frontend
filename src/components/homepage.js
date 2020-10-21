import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import HomepageNav from './homepageNav'
import {OptionsContext} from './optionsContext'

function Homepage(){

    const {feature, featureroute} = useContext(OptionsContext)

    const[option, setoption] = feature
    const[optroute, setroute] = featureroute

    const setSearch = ()=>{
        setoption('Search')
        setroute('/searchResults')
    }

    const setCheckin = ()=>{
        setoption('Check in')
        setroute('/checkinResults')
    }

    return(
        <div className='homepage'>
            <HomepageNav/>
            <div className="home-display">
                <h2>Do you need to check in your location or find a new desination?</h2>
                <div className="home-options">
                    <Link to='/search'>
                        <button onClick={setSearch}>Search</button>
                    </Link>
                    <Link to='/checkIn'>
                        <button onClick={setCheckin}>Check in</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage