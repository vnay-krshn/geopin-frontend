import React from 'react'
import Ratings from './ratings'
import PropTypes from 'prop-types'

const LatestSearch =({place, date})=>{
    return(
    <div className="latest-search">
        <div className="latest-search-info">
            <label>{place}</label>
            <label>{date}</label>
        </div>
        <Ratings/>
    </div>)
}

LatestSearch.propTypes={
    place : PropTypes.string,
    date : PropTypes.instanceOf(Date)
}

export default LatestSearch