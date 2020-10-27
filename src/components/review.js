import React, { useContext } from 'react'
import Ratings from './ratings'
import {OptionsContext} from './optionsContext'

const Review =()=>{
    const {visibility} = useContext(OptionsContext)

    const[visible, setvisibility] = visibility

    return(
    <div className="review">
        <div className="review-box">
            <textarea placeholder="Add your description"></textarea>
            <div className="review-rating">
                <label>Rate the location</label>
                <Ratings size={20}/>
            </div>
        </div>
        <button onClick={()=>setvisibility(!(visible))}>Done</button>
    </div>)
}

export default Review