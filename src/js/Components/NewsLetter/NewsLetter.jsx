import React from 'react';
 
const NewsLetter=(props)=>{
    return(
        <div className="container-fluid bg-own p-5">
            <div className="container">
                <div className="row p-4">
                    <div className="col-sm-12 col-md-6  ">
                    <i class="fa fa-paper-plane  d-inline" id="size"></i>
                        <h2 className= "h3 d-inline ml-4 ">{props.news.heading}</h2>

                    </div>
                    <div className="col-sm-12 mt-sm-4 mt-lg-0 col-md-6 ">
                    <div class="input-group mb-3">
                     <input type="email" class="form-control int" placeholder={props.news.placeholder} aria-label="Recipient's username" aria-describedby="button-addon2"/>
                     <div class="input-group-append">
                       <button class="btn color" type="button" id="button-addon2">{props.news.button}</button>

                         </div>

                    </div>
                        
                    </div>
                </div>
            </div>


        </div>
    )
}
export default NewsLetter;