import React from 'react'
import Ratings from './ratings'

const DateRating = ({date,size})=>{
    return(
        <div className="date-rating">
            <label id="date">{date}</label>
            <Ratings size={size}/>
        </div>
    )
}

export default DateRating