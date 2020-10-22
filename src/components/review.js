import React from 'react'
import Ratings from './ratings'

const Review =()=>{
    return(
    <div className="review">
        <div className="review-box">
            <textarea placeholder="Add your description"></textarea>
            <div className="review-rating">
                <label>Rate the location</label>
                <Ratings size={20}/>
            </div>
        </div>
        <button>Done</button>
    </div>)
}

export default Review