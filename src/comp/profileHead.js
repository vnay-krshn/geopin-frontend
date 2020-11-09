import React from 'react'
import HomepageNav from './homepageNav'
import '../css/profileContact.css'

const ProfileHead=()=>{
    return(
        <div className="profileHead">
            <HomepageNav/>
            <div className="profileHead-header">
                <img id="profile" src='/imgs/user_image_bitmap.svg'></img>
                <div className="profileHead-name">
                    <h4>Joseph Pete</h4>
                    <label>joseph123@gmail.com</label>
                </div>
                <div className="profileHead-nationality">
                    <img src='/imgs/india-flag.jpg'></img>
                    <label>Indian</label>
                </div>
                <div className='profileHead-contact'>
                    <label>Contact number</label>
                    <label>9445678987</label>
                </div>
            </div>
        </div>)
}

export default ProfileHead