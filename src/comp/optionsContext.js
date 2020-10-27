import React, { createContext, useState } from 'react'

export const OptionsContext = createContext()

export const OptionProvider=(props)=>{
    const[option, setoption] = useState('')
    const[optroute, setroute] = useState('')
    const[visible, setvisibility] = useState(false)

    return(
   <OptionsContext.Provider value={
       {feature:[option, setoption],
        featureroute:[optroute, setroute],
        visibility:[visible, setvisibility]}}>
       {props.children}
   </OptionsContext.Provider>)
}