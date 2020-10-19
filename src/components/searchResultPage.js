import React from 'react'
import HomepageNav from './homepageNav'
import Options from './options'

function SearchResults(){
    return(
    <div className='searchResults'>
        <HomepageNav/>
        <div className='searchResults-options'>
            <Options operation={'search'}/>
        </div>
    </div>)
}

export default SearchResults