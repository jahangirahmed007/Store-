import React from 'react';

const Nav=(props)=>{

let res=props.nav.navlinks.map((item,index)=>{
    return(
        <li className="nav-item ml-3" key={index}>
            <a href="#" className="nav-link color-own ">{item}</a>

        </li>
    )
})
    return(
        
            <nav className=" navbar navbar-expand-lg  navbar-light text-light ">
                <a href="#" className="navbar-brand pt-4"><h3 className="">{props.nav.navbar_brand}</h3></a>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#bar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse pt-4" id="bar">
                    <ul className="navbar-nav ml-auto mr-4">
                        {res}
                        <li className="nav-item ml-3">
                            <a href="#" className="nav-link">
                            <i class="fa fa-luggage-cart"></i> Cart[0]
                            </a>

                        </li>

                    </ul>

                </div>


            </nav>

        
    )
}
export default Nav;