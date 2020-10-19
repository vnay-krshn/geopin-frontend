import React from 'react'
import HomepageNav from './homepageNav'
import Options from './options'

function SearchPage(){
    return(
    <div className="searchpage">
       <HomepageNav/>
       <h2>Search for a location</h2>
       <Options operation={'Search'}/>
    </div>)
}

export default SearchPage