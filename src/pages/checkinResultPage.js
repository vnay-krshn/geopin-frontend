import React, { useContext } from 'react'
import HomepageNav from '../comp/homepageNav'
import Options from '../comp/options'
import {OptionsContext} from '../comp/optionsContext'
import Maps from '../comp/maps'
import PlaceInfo from '../comp/placeinfo'
import Review from '../comp/review'

function CheckinResults(){
    const {feature, featureroute, visibility} = useContext(OptionsContext)

    const[option, setoption] = feature
    const[optroute, setroute] = featureroute
    const[visible, setvisibility] = visibility
    
    return(
    <div className='checkinResults'>
        <HomepageNav/>
        <div className='checkinResults-options'>
            <Options option={option} optroute={optroute}/>
        </div>
        <Maps/>
        <PlaceInfo/>
        {!visible && <Review/>}
    </div>)
}

export default CheckinResults