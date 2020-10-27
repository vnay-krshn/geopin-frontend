import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {OptionsContext} from './optionsContext'

function Options(){

    const {feature, featureroute, visibility} = useContext(OptionsContext)

    const[option, setoption] = feature
    const[optroute, setroute] = featureroute
    const[visible, setvisibility] = visibility

    const forReview =()=>{
        if(option=='Check in')
            {
              setvisibility(!(visible))
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