import React from 'react'
import Ratings from './ratings'

const Visitors=({username, date, phone})=>{
return(
<div className="visitor">
    <img src='/imgs/user_image_bitmap.svg'></img>
    <div className='visitor-info'>
        <label>{username}</label>
        <label>{date}</label>
        <label>Call: {phone}</label>
        <Ratings/>
    </div>
</div>)
}

export default Visitors