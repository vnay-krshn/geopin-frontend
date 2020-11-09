import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import PropTypes from 'prop-types'

const Ratings=({size})=>{

const[rating, setRating] = useState(null)
const[hover, setHover] =useState(null)

return(
<div className="rate">
    {[...Array(5)].map((star, i,key)=>{
        const ratingValue = i + 1
        return(
            <label key={i}>
                <input 
                type="radio" 
                name="rating" 
                value={ratingValue}
                onClick={()=> setRating(ratingValue)}>
                </input>

                <FaStar
                className="star"
                color={ratingValue <= (hover||rating) ? '#00d3b8' : '#e4e5e9'}
                size={size}
                onMouseEnter={()=>setHover(ratingValue)}
                onMouseLeave={()=>setHover(null)}/>
            </label>
        )
    })}
</div>)
}

Ratings.propTypes={
    size : PropTypes.number
}

export default Ratings