import React from 'react'
import { Link } from 'react-router-dom'
import DateRating from './dateRating'

const Visitors=({username, date, phone})=>{
return(
   <div className="visitor">
        <img src='/imgs/user_image_bitmap.svg'></img>
        <div className='visitor-info'>
            <Link to='/visitorProfile' style={{ textDecoration: 'none' }}>
                <label id="username">{username}</label>
            </Link>
            <DateRating date={date} size={14}/>
            <label>Call: {phone}</label>      
        </div>
    </div>
)
}

export default Visitors