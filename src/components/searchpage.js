import React, { useContext } from 'react'
import HomepageNav from './homepageNav'
import Options from './options'
import {OptionsContext} from './optionsContext'

function SearchPage(){
    const {feature, featureroute} = useContext(OptionsContext)

    const[option, setoption] = feature
    const[optroute, setroute] = featureroute

    return(
    <div className="searchpage">
       <HomepageNav/>
       <h2>Search for a location</h2>
       <Options option={option} optroute={optroute}/>
    </div>)
}

export default SearchPage