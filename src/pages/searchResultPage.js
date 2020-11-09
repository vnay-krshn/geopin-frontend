import React, { useContext } from 'react'
import HomepageNav from '../comp/homepageNav'
import {OptionsContext} from '../comp/optionsContext'
import Maps from '../comp/maps'
import Visitors from '../comp/visitors'
import Filter from '../comp/filter'

import {usersData} from '../mockData/userData'

import '../css/maps.css'
import '../css/placeInfo.css'
import '../css/visitors.css'
import '../css/filter.css'

const SearchResults=()=>{
    const {filterVisibility} = useContext(OptionsContext)

    const[visibleFilter, setFilterVisible] = filterVisibility

    return(
    <div className='searchResults'>
        <HomepageNav/>
        <Maps/> 
        <div className='visitor-details'>
            <div className='visitor-details-header'>
                <h3>Recent visitors of PLACE_NAME</h3>
                <ul>
                    <li>Filter</li>
                    <li><img onClick={()=>setFilterVisible(!(visibleFilter))} src='/imgs/filter_icon.svg'></img></li>
                </ul>
            </div>

            <div className="visitor-details-cards">
                {usersData.map((data,key)=>(
                    <Visitors username={data.name} date={data.date} phone={data.phone} key={key}/>
                ))}
            </div>
            <button>More</button>
        </div>
        {visibleFilter && <Filter/>}
    </div>)
}

export default SearchResults