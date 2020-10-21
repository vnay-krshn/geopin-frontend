import React from 'react'
import Ratings from './ratings'

const PlaceInfo=()=>{
    return(
    <div className="placeInfo">
        <img src='/imgs/side_image.png'></img>
        <div className="information" >
            <h2>Place Name</h2>
            <p>The Rockaway River flows through flat 
            plains of Denville and Boonton Township. At this 
            point elevation is 480 feet (150 m) above sea level.</p>
        </div>
        <div className="details">
            <label>Visitors : 476</label>
            <label>Ratings : </label><Ratings/>
            <label>Zip : 1108</label>
        </div>
    </div>)
}

export default PlaceInfo