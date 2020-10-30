import React,{useContext} from 'react'
import {OptionsContext} from './optionsContext'

const Filter=()=>{

    const {filterVisibility} = useContext(OptionsContext)
    const[visibleFilter, setFilterVisible] = filterVisibility

    return(
        <div className="filter">
            <input placeholder="visitor's nationality"></input>
            <div>
                <input placeholder="visited month"></input>
                <input placeholder="visited year"></input>
            </div>
            <input placeholder="visitor's rating"></input>
            <button onClick={()=>{setFilterVisible(!visibleFilter)}}>Done</button>
        </div>
    )
}

export default Filter