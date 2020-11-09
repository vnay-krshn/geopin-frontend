import React, { createContext, useState } from 'react'

export const OptionsContext = createContext()

export const OptionProvider=(props)=>{
    
    const[visibleFilter, setFilterVisible] = useState(false)
    const[visibleUserEdit, setUserEditVisible] = useState(false)
    const[country, setcountry] = useState([])
    const[Active, setActive] = useState(false)

    return(
   <OptionsContext.Provider value={
                {
                    filterVisibility : [visibleFilter, setFilterVisible],
                    userEditVisibility : [visibleUserEdit, setUserEditVisible],
                    nationality:[country, setcountry],
                    activate: [Active,setActive]
                }}>
       {props.children}
   </OptionsContext.Provider>)
}

