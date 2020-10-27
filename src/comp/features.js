import React from 'react'


function Features({src, title, descr}){
    return(
    <div className="card">
            <img src={src}></img>
            <h4>{title}</h4>
            <p>{descr}</p>
    </div>)
}

export default Features