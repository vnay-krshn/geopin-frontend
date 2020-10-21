import React from 'react'

const Filter=()=>{
    return(
        <div className="filter">
            <input placeholder="visitor's nationality"></input>
            <div>
                <input placeholder="visited month"></input>
                <input placeholder="visited year"></input>
            </div>
            <input placeholder="visitor's rating"></input>
            <button>Done</button>
        </div>
    )
}

export default Filter