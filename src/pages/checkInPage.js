import React, { useContext } from 'react'
import HomepageNav from '../comp/homepageNav'
import Options from '../comp/options'
import {OptionsContext} from '../comp/optionsContext'

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