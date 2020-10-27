import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'

const Ratings=({size})=>{

const[rating, setRating] = useState(null)

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
                color={ratingValue <= rating ? '#ffc107' : '#e4e5e9'}
                size={size}/>
            </label>
        )
    })}
</div>)
}

export default Ratings