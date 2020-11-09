import React from 'react'
import PropTypes from 'prop-types'
import Ratings from './ratings'

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
    date : PropTypes.string
}

export default LatestSearch