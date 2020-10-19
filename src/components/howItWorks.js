import React from 'react'
import Features from './features'


function HowItWorks(){
    return(
    <div className="howItWorks">
        <h1>How it works</h1>
        <h4>These are some instructions and suggestions</h4>
        <div className="icon-container">
            <Features src={'imgs/searche_location_icon.svg'} title={'Search location'} descr={"Vestibulum scelerisque sapien quis nisi fringilla tincidunt."}/>
            <Features src={'imgs/searche_location_icon.svg'} title={'Check in your location'} descr={"Vestibulum scelerisque sapien quis nisi fringilla tincidunt."}/>
            <Features src={'imgs/searche_location_icon.svg'} title={'Contact visitors'} descr={"Vestibulum scelerisque sapien quis nisi fringilla tincidunt."}/>
        </div>
    </div>)
}

export default HowItWorks