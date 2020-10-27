import React from 'react'
import Ratings from './ratings'

const LatestSearch =({place, date})=>{
    return(
    <div className="latest-search">
        <div>
            <label>{place}</label>
            <label>{date}</label>
        </div>
        <Ratings/>
    </div>)
}

export default LatestSearch