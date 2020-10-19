import React from 'react'
import HomepageNav from './homepageNav'
import Options from './options'

function CheckInPage(){
    return(
    <div className="checkInPage">
       <HomepageNav/>
       <h2>Check into a location</h2>
       <Options operation={'check in'}/>
    </div>)
}

export default CheckInPage