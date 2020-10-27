import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import HomepageNav from '../comp/homepageNav'
import {OptionsContext} from '../comp/optionsContext'

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
                <p>Do you need to check in your <strong>location</strong> or find a new <strong>desination</strong>?</p>
                <div className="home-options">
                    <Link to='/search'>
                        <button onClick={setSearch}>SEARCH</button>
                    </Link>
                    <Link to='/checkIn'>
                        <button onClick={setCheckin}>CHECK IN</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Homepage