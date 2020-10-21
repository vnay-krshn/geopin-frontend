import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import {OptionsContext} from './optionsContext'

function Options(){

    const {feature, featureroute} = useContext(OptionsContext)

    const[option, setoption] = feature
    const[optroute, setroute] = featureroute

    return(
    <div>
        <div>
            <div className="options">
                <input placeholder={option}></input>
                <Link to={optroute}>
                    <button>{option}</button>
                </Link>
            </div>
        </div>
    </div>)
}

export default Options