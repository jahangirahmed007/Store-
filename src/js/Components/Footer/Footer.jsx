import React from 'react';

const Footer =(props)=>{

    let res= props.foot.customer_care.items.map((item,index)=>{
        return(
            <li key={index} className="mb-3 text-muted">
                {item}
            </li>
        )
    })
    let res1= props.foot.information.items.map((item,index)=>{
        return(
            <li key={index} className="mb-3  text-muted">
                {item}
            </li>
        )
    })
    let res2= props.foot.News.items.map((item,index)=>{
        return(
            <li key={index} className="mb-3  text-muted">
                {item}
            </li>
        )
    })
    let res3= props.foot.Contact_info.items.map((item,index)=>{
        return(
            <li key={index} className="mb-3   text-muted">
                {item}
            </li>
        )
    })
    return(
        <div className="container-fliud box">
            <div className="row p-5">
                <div className="col-sm-12 col-md-2    ml-5 mt-3">
                    <h5 className=" mb-4">{props.foot.About.heading}</h5>
                    <p className="text-muted">{props.foot.About.disc}</p>
                    <ul className=" list-inline ">
                        <li className="list-inline-item  size"><i class="fab fa-twitter "></i></li>
                        <li className="list-inline-item  size" ><i class="fab fa-facebook-f  "></i></li>
                        <li className="list-inline-item size"><i class="fab fa-invision "></i></li>
                        <li className="list-inline-item   size"><i class="fab fa-dribbble "></i></li>
                    </ul>

                </div>

                <div className="col-sm-12 col-md-2 ml-5 mt-3">
                    <h5 className="mb-4">{props.foot.customer_care.heading}</h5>
                    <ul  className="navbar-nav" >
                        {res}

                    </ul>

                </div>
                <div className="col-sm-12 col-md-2  ml-5 mt-3">
                    <h5 className="mb-4">{props.foot.information.heading}</h5>
                    <ul  className="navbar-nav">
                        {res1}

                    </ul>

                </div>
                <div className="col-sm-12 col-md-1  ml-5 mt-3">
                    <h5 className="mb-4">{props.foot.News.heading}</h5>
                    <ul  className="navbar-nav">
                        {res2}

                    </ul>

                </div>

                <div className="col-sm-12 col-md-2  ml-5 mt-3">
                    <h5 className="mb-4">{props.foot.Contact_info.heading}</h5>
                    <ul className="navbar-nav">
                        {res3}

                    </ul>

                </div>

                
            </div>

            

           
        </div>
    )

}
export default Footer;
