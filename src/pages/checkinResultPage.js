import React, { useContext } from 'react'
import HomepageNav from '../comp/homepageNav'
import Options from '../comp/options'
import {OptionsContext} from '../comp/optionsContext'
import Maps from '../comp/maps'
import PlaceInfo from '../comp/placeinfo'
import Review from '../comp/review'

const CheckinResults=()=>{
    const {reviewVisibility} = useContext(OptionsContext)

    const[visibleReview, setReviewVisible] = reviewVisibility
    
    return(
    <div className='checkinResults'>
        <HomepageNav/>
        <div className='checkinResults-options'>
            <Options option={'Check in'}/>
        </div>
        <Maps/>
        <PlaceInfo/>
        {visibleReview && <Review/>}
    </div>)
}

export default CheckinResults