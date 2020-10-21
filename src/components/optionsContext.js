import React, { createContext, useState } from 'react'

export const OptionsContext = createContext()

export const OptionProvider=(props)=>{
    const[option, setoption] = useState('')
    const[optroute, setroute] = useState('')

    return(
   <OptionsContext.Provider value={{feature:[option, setoption],featureroute:[optroute, setroute]}}>
       {props.children}
   </OptionsContext.Provider>)
}