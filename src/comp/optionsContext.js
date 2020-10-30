import React, { createContext, useState } from 'react'

export const OptionsContext = createContext()

export const OptionProvider=(props)=>{
    
    const[visibleFilter, setFilterVisible] = useState(false)
    const[visibleReview, setReviewVisible] = useState(false)

    return(
   <OptionsContext.Provider value={
                {
                    filterVisibility:[visibleFilter, setFilterVisible],
                    reviewVisibility:[visibleReview, setReviewVisible]
                }}>
       {props.children}
   </OptionsContext.Provider>)
}

