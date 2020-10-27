import React, { useContext } from 'react'
import HomepageNav from './homepageNav'
import Options from './options'
import {OptionsContext} from './optionsContext'

function CheckInPage(){
    const {feature, featureroute} = useContext(OptionsContext)

    const[option, setoption] = feature
    const[optroute, setroute] = featureroute

    return(
    <div className="checkInPage">
       <HomepageNav/>
       <h2>CHECK INTO YOUR DREAM LOCATION</h2>
       <Options option={option} optroute={optroute}/>
    </div>)
}

export default CheckInPage