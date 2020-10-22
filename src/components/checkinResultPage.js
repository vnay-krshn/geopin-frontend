import React, { useContext } from 'react'
import HomepageNav from './homepageNav'
import Options from './options'
import {OptionsContext} from './optionsContext'
import Maps from './maps'
import PlaceInfo from './placeinfo'
import Review from './review'

function CheckinResults(){
    const {feature, featureroute} = useContext(OptionsContext)

    const[option, setoption] = feature
    const[optroute, setroute] = featureroute
    
    return(
    <div className='checkinResults'>
        <HomepageNav/>
        <div className='checkinResults-options'>
            <Options option={option} optroute={optroute}/>
        </div>
        <div>
            <Maps/>
        </div>
        <div>
            <PlaceInfo/>
        </div>
        <div>
            <Review/>
        </div>
    </div>)
}

export default CheckinResults