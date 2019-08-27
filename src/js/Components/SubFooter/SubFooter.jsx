import React from 'react';

const SubFooter=(props)=>{
    return(
        <div className="container">
                <p className="text-center">{props.sub.disc} <span className="color-own">{props.sub.color}</span>{props.sub.dem} <span className="color-own">{props.sub.un} </span>, <span className="color-own">{props.sub.pex}</span>  </p>
            </div>
    )
}
export default SubFooter;