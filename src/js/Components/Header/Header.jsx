import React from 'react';


const Header=(props)=>{

  
    let res=props.head.links.map((item,index)=>{
        return(
            <li className="navbar-item  mr-3 color-own1">
                {item}
            </li>
        )
    })
   

    return(
       <div className="container-fluid back p-5" >
           <div className="container p-5">
               <h3 className="mt-5 h1 font-weight-bolder text-center">{props.head.title}</h3>
               <ul className="navbar-nav d-block  left mb-5">
                   {res}
               </ul>
           </div>

       </div>
    )

}
export default Header;