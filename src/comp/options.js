import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {OptionsContext} from './optionsContext'

const Options=({option, optroute})=>{

    const {reviewVisibility} = useContext(OptionsContext)

    const[visibleReview, setReviewVisible] = reviewVisibility

    const forReview =()=>{
        if((option=='Check in')&&(window.location.pathname.indexOf('checkinResults')>-1))
            {
                setReviewVisible(!(visibleReview))
            }
    }

    return(
    <div>
        <div className="options">
                <input placeholder={option}></input>
                <Link to={optroute}>
                    <button onClick={forReview}>{option}</button>
                </Link>
        </div>
    </div>)
}

export default Options