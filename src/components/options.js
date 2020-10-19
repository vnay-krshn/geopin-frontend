import React from 'react'
import { Link } from 'react-router-dom'

function Options({operation}){
    return(
    <div>
        <div>
            <div className="options">
                <input placeholder={operation}></input>
                <Link to='/searchResults'>
                    <button>{operation}</button>
                </Link>
            </div>
        </div>
    </div>)
}

export default Options