import React from 'react'
import Features from './features'
import '../css/howItWorks.css'
import '../css/features.css'


const HowItWorks=()=>{
    return(
    <div className="howItWorks">
        <h1>HOW IT WORKS</h1>
        <h4>Some instructions and suggestions</h4>
        <div className="icon-container">
            <Features src={'imgs/searche_location_icon.svg'} title={'Search location'} descr={"Ut tempus faucibus sapien, quis pulvinar massa feugiat vel. Praesent non blandit , quis pulvinar massa feugiat vel. Praesent non blandit"}/>
            <Features src={'imgs/searche_location_icon.svg'} title={'Check in your location'} descr={"Ut tempus faucibus sapien, quis pulvinar massa feugiat vel. Praesent non blandit , quis pulvinar massa feugiat vel. Praesent non blandit"}/>
            <Features src={'imgs/searche_location_icon.svg'} title={'Contact visitors'} descr={"Ut tempus faucibus sapien, quis pulvinar massa feugiat vel. Praesent non blandit , quis pulvinar massa feugiat vel. Praesent non blandit"}/>
        </div>
    </div>)
}

export default HowItWorks