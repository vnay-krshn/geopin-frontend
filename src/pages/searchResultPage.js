import React, { useContext } from 'react'
import HomepageNav from '../comp/homepageNav'
import Options from '../comp/options'
import {OptionsContext} from '../comp/optionsContext'
import Maps from '../comp/maps'
import Visitors from '../comp/visitors'
import {users} from '../temp'
import PlaceInfo from '../comp/placeinfo'
import Filter from '../comp/filter'

function SearchResults(){
    const {feature, featureroute, visibility} = useContext(OptionsContext)

    const[option, setoption] = feature
    const[optroute, setroute] = featureroute
    const[visible, setvisibility] = visibility

    return(
    <div className='searchResults'>
        <HomepageNav/>
        <div className='searchResults-options'>
            <Options option={option} optroute={optroute}/>
        </div>
        <Maps/>
        <PlaceInfo/>     
        <div className='visitor-details'>
            <div className='visitor-details-header'>
                <h3>Recent visitors of PLACE_NAME</h3>
                <ul>
                    <li>Filter</li>
                    <li><img onClick={()=>setvisibility(!(visible))} src='/imgs/filter_icon.svg'></img></li>
                </ul>
            </div>

            <div className="visitor-details-cards">
                {users.map((data,key)=>(
                    <Visitors username={data.name} date={data.date} phone={data.phone} key={key}/>
                ))}
            </div>
            <button>More</button>
        </div>
        {visible && <Filter visibile={visible}/>}
    </div>)
}

export default SearchResults