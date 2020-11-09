import React, { useContext} from 'react'
import classNames from 'classnames';
import { OptionsContext } from './optionsContext'
import '../css/dropdown.css'

const Dropdown=({value, onChange,options})=>{
    const{activate} = useContext(OptionsContext)
    const[Active, setActive] = activate

    const applyChange=(newItem)=>{
        onChange && onChange([newItem])
    }

    return(
        <div className="dropdown-container" onClick={()=>setActive(!Active)}>
            <div className="dropdown-input">
                <span className='arrow-down'></span>
                <div className="dropdown-values">
                    {
                        value.length?
                        value.map(v=><div key={v} className="dropdown-value">
                            <img src={options[v].country}/>
                        </div>):
                        <div onClick={()=>setActive(!Active)} className="dropdown-placeholder">
                            Country
                        </div>
                    }
                </div>
            </div>
            <div className={classNames('dropdown-options',{'dropdown-active':Active})}>
                {options.map((item)=>
                    <div onClick={()=>applyChange(item.id)} key={item.id} className='dropdown-item'>
                        <img src={item.country}/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dropdown