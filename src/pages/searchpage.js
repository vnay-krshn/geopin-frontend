import React, { useContext } from 'react'
import HomepageNav from '../comp/homepageNav'
import Options from '../comp/options'
import {OptionsContext} from '../comp/optionsContext'

function SearchPage(){
    const {feature, featureroute} = useContext(OptionsContext)

    const[option, setoption] = feature
    const[optroute, setroute] = featureroute

    return(
    <div className="searchpage">
       <HomepageNav/>
       <h2>FIND YOUR DREAM DESTINATION</h2>
       <Options option={option} optroute={optroute}/>
    </div>)
}

export default SearchPage