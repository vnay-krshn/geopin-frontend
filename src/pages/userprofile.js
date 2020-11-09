import React,{useContext, useEffect} from 'react'
import ProfileHead from '../comp/profileHead'
import LatestSearch from '../comp/latestSearch'
import PlacesLogged from '../comp/placesLogged'
import UserEdit from '../comp/userEdit'
import {OptionsContext} from '../comp/optionsContext'

import {placesData} from '../mockData/placesData'
import {usersData} from '../mockData/userData'

import '../css/userEdit.css'

const UserProfile = ()=>{

const {userEditVisibility} = useContext(OptionsContext)
const[visibleUserEdit, setUserEditVisible] = userEditVisibility

useEffect(()=>{
    const profile = document.querySelector('.profile-blur')
    const editButton = document.querySelector('.edit')
    if(visibleUserEdit===true){
        profile.style.filter = 'blur(3px)'
        editButton.disabled = true
    }
    else{
        profile.style.filter='none'
        editButton.disabled = false
    }
})

return(
<div className="userprofile">
    <div className="profile-blur">
        <ProfileHead/>
        <button className="edit" onClick={()=>setUserEditVisible(!(visibleUserEdit))}>Edit</button>   
        <div className="userprofile-cards">
            <div className="sidebar">
                <div className="search-post">
                    <input placeholder="Search your posts"></input>
                    <button><img src='/imgs/loupe.svg'></img></button>
                </div>
                <div className="recent-searches">
                    <div className="title">Latest Searches</div>
                    {placesData.map((items,key)=>(
                        <LatestSearch key={key} place={items.place} date={items.date}/>
                    ))}
                </div>
                <div className="saved-contacts">
                    <div className="title">Saved contacts</div>
                    <div className="contact-images">
                        {usersData.map((items,key)=>(
                            <img src={items.image} key={key}></img>
                        ))}
                    </div>
                </div>
            </div>
            <div className="main">
                    {placesData.slice(0,2).map((data,key)=>(
                        <PlacesLogged date={data.date} location={data.location} place={data.place} description={data.description} key={key}/>
                    ))}
            </div>  
            <label style={{position:"absolute", right:'13em',top:'20em'}}>Places logged : 12</label>
        </div>
        <button id="more">MORE</button> 
    </div> 
    {visibleUserEdit && <UserEdit/>} 
</div>)
}

export default UserProfile