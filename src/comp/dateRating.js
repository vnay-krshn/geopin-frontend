import React from 'react'
import Ratings from './ratings'
import PropTypes from 'prop-types'

const DateRating = ({date,size})=>{
    return(
        <div className="date-rating">
            <label id="date">{date}</label>
            <Ratings size={size}/>
        </div>
    )
}

DateRating.propTypes={
 date : PropTypes.instanceOf(Date),
 size : PropTypes.number
}

export default DateRating