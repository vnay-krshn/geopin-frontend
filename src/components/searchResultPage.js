import React, { useContext, useEffect, useState } from 'react'
import HomepageNav from './homepageNav'
import Options from './options'
import {OptionsContext} from './optionsContext'
import Maps from './maps'
import Visitors from './visitors'
import {users} from '../temp'
import PlaceInfo from './placeinfo'
import Filter from './filter'

function SearchResults(){
    const {feature, featureroute} = useContext(OptionsContext)

    const[option, setoption] = feature
    const[optroute, setroute] = featureroute

    return(
    <div className='searchResults'>
        <HomepageNav/>
        <div className='searchResults-options'>
            <Options option={option} optroute={optroute}/>
        </div>
        <div>
            <Maps/>
            <PlaceInfo/>
        </div>
        <div className='visitor-details'>
            <div className='visitor-details-header'>
                <h3>Recent visitors of PLACE_NAME</h3>
                <ul>
                    <li>Filter</li>
                    <li><img src='/imgs/filter_icon.svg'></img></li>
                </ul>
            </div>

            <div className="visitor-details-cards">
                {users.map((data,key)=>(
                    <Visitors username={data.name} date={data.date} phone={data.phone} key={key}/>
                ))}
            </div>
         <button>More</button>
        </div>
        <Filter/>
    </div>)
}

export default SearchResults