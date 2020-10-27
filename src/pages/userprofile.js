import React from 'react'
import ProfileHead from '../comp/profileHead'
import {recentSearches} from '../temp3'
import {savedContacts} from '../temp4'
import LatestSearch from '../comp/latestSearch'

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
                <div className="contacts-images">
                    {savedContacts.map((items)=>(
                        <img src={items.image}></img>
                    ))}
                </div>
            </div>
        </div>
        <div className="main">
        
        </div>    
    </div> 
</div>)
}

export default UserProfile