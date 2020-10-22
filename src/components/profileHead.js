import React from 'react'
import HomepageNav from './homepageNav'
import ProfileContact from './profileContact'

const ProfileHead=()=>{
    return(
        <div className="profileHead">
            <HomepageNav/>
            <div className="profileHead-header">
                <img id="profile" src='/imgs/user_image_bitmap.svg'></img>
                <div className="profileHead-name">
                    <h4>User Name</h4>
                    <label>User Email Id</label>
                </div>
                <div className="profileHead-nationality">
                    <img src='/imgs/india-flag.jpg'></img>
                    <label>Indian</label>
                </div>
                <ProfileContact/>
                <button id="save">Save contact</button>
            </div>
        </div>)
}

export default ProfileHead