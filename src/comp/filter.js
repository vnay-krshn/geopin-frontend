import React,{useContext} from 'react'
import {OptionsContext} from './optionsContext'

const Filter=()=>{

    const {visibility} = useContext(OptionsContext)
    const[visible, setvisibility] = visibility

    return(
        <div className="filter">
            <input placeholder="visitor's nationality"></input>
            <div>
                <input placeholder="visited month"></input>
                <input placeholder="visited year"></input>
            </div>
            <input placeholder="visitor's rating"></input>
            <button onClick={()=>{setvisibility(!visible)}}>Done</button>
        </div>
    )
}

export default Filter