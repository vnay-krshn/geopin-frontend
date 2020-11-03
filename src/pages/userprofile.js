import React from 'react'
import ProfileHead from '../comp/profileHead'
import {visitors} from '../temp2'
import {recentSearches} from '../temp3'
import {savedContacts} from '../temp4'
import LatestSearch from '../comp/latestSearch'
import PlacesLogged from '../comp/placesLogged'
import UserEdit from '../comp/userEdit'
import '../css/userEdit.css'

const UserProfile = ()=>{
return(
<div className="userprofile">
    <ProfileHead/>
    <button className="edit">Edit</button>   
    <div className="userprofile-cards">
        <div className="sidebar">
            <div className="search-post">
               <input placeholder="Search your posts"></input>
               <button><img src='/imgs/loupe.svg'></img></button>
            </div>
            <div className="recent-searches">
                <div className="title">Latest Searches</div>
                {recentSearches.map((items)=>(
                    <LatestSearch key={items.key} place={items.place} date={items.date}/>
                ))}
            </div>
            <div className="saved-contacts">
                <div className="title">Saved contacts</div>
                <div className="contact-images">
                    {savedContacts.map((items)=>(
                        <img src={items.image}></img>
                    ))}
                </div>
            </div>
        </div>
        <div className="main">
                {visitors.slice(0,2).map((data,key)=>(
                    <PlacesLogged date={data.date} location={data.location} place={data.place} description={data.description} key={key}/>
                ))}
        </div>  
        <label style={{position:"absolute", right:'13em',top:'20em'}}>Places logged : 12</label>
    </div> 
    <button id="more">MORE</button> 
    <UserEdit/> 
</div>)
}

export default UserProfile