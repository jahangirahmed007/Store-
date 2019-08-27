import React from 'react'


const Products =(props)=>{
   












    let res=props.prod.pro.map((item,index)=>{
        return(
            <div className="col-lg-4" key={index}>
            
            <div className="container  effect p-4" >
            <img src={item.img} className="img-fluid img" alt=""/>
            <div className="eff">
                <ul>
                    <li className="text-center"><a href="#" className=""><i className="fas fa-cart-arrow-down "></i></a></li>
                    <li className="text-center"><a href="#"><i className="far fa-eye"></i></a></li>
                    <li className="text-center"><a href="#"><i className="fas fa-heart"></i></a></li>
                    <li className="text-center"><a href="#"><i className="fas fa-signal"></i></a></li>
                </ul>
              
            </div>
        </div>
        <h3 className="text-center " >{item.cata}</h3>
            <p className=" text-center">{item.price}</p>
        </div>
        )
    })

    let res2=props.prod.pro2.map((item,index)=>{
        return(
            <div className="col-lg-4" key={index}>
            
            <div className="container  effect p-4" >
            <img src={item.img} className="img-fluid img" alt=""/>
            <div className="eff">
                <ul>
                    <li className="text-center"><a href="#" className=""><i className="fas fa-cart-arrow-down "></i></a></li>
                    <li className="text-center"><a href="#"><i className="far fa-eye"></i></a></li>
                    <li className="text-center"><a href="#"><i className="fas fa-heart"></i></a></li>
                    <li className="text-center"><a href="#"><i className="fas fa-signal"></i></a></li>
                </ul>
              
            </div>
           
        </div>
        <h3 className="text-center " >{item.cata}</h3>
            <p className=" text-center">{item.price}</p>
        </div>
        )
    })
    let res3=props.prod.pro3.map((item,index)=>{
        return(
            <div className="col-lg-4" key={index}>
            
            <div className="container effect p-4" >
            <img src={item.img} className="img-fluid img" alt=""/>
            <div className="eff">
                <ul>
                    <li className="text-center"><a href="#" className=""><i className="fas fa-cart-arrow-down "></i></a></li>
                    <li className="text-center"><a href="#"><i className="far fa-eye"></i></a></li>
                    <li className="text-center"><a href="#"><i className="fas fa-heart"></i></a></li>
                    <li className="text-center"><a href="#"><i className="fas fa-signal"></i></a></li>
                </ul>
              
            </div>
           
        </div>
        <h3 className="text-center " >{item.cata}</h3>
            <p className=" text-center">{item.price}</p>
        </div>
        )
    })
    let res4=props.prod.pro4.map((item,index)=>{
        return(
            <div className="col-lg-4" key={index}>
            
            <div className="container effect p-4" >
            <img src={item.img} className="img-fluid img" alt=""/>
            <div className="eff">
                <ul>
                    <li className="text-center"><a href="#" className=""><i className="fas fa-cart-arrow-down "></i></a></li>
                    <li className="text-center"><a href="#"><i className="far fa-eye"></i></a></li>
                    <li className="text-center"><a href="#"><i className="fas fa-heart"></i></a></li>
                    <li className="text-center"><a href="#"><i className="fas fa-signal"></i></a></li>
                </ul>
              
            </div>
           
        </div>
        <h3 className="text-center " >{item.cata}</h3>
            <p className=" text-center">{item.price}</p>
        </div>
        )
    })

    // Cstegories // 

    let rescat=props.cat.men.map((item,index)=>{
     return(
         <li className="" key={index}>{item}</li>
     )
    })
    let rescat1=props.cat.Woman.map((item,index)=>{
        return(
            <li className="" key={index}>{item}</li>
        )
       })

    //    price 

    let opt=props.pr.select.map((item, index)=>{
        return(
            <option key={index}>{item}</option>
        )
    })
    let opt2=props.pr.select_2.map((item, index)=>{
        return(
            <option key={index}>{item}</option>
        )
    })

    return(
        <div className="container-fluid  mt-5 ">
            <div className="row mt-5">

                <div className="col-md-2 mt-5">
                
                <div className="contianer-fluid bord mt-4" >
                    <h3 className="h4 text-center mr-4">{props.cat.heading}</h3>
                    <div className="accordion mt-5 " id="cap">
                        {/* First one */}
                                <p className="ml-4 " id="head">
                                    <a className="text-muted" data-toggle="collapse" href="#collap">MEN</a>
                                </p>
                            
                            <div className="collapse" id="collap" aria-labelledby="head" data-parent="#cap">
                                <div className="">
                                    <ul>
                                        {rescat}
                                    </ul>
                                </div>
                            </div>
                            {/* Second one */}

                            <p className="ml-4" id="head2">
                                    <a className="text-muted" data-toggle="collapse" href="#collap2">WOMAN</a>
                                </p>
                            
                            <div className="collapse" id="collap2" aria-labelledby="head2" data-parent="#cap">
                                <div className="">
                                    <ul>
                                        {rescat}
                                    </ul>
                                </div>
                            </div>
                            {/* Third One */}
                            <p className="ml-4" id="head3">
                                    <a className="text-muted" data-toggle="collapse" href="#collap3">JEWELRY</a>
                                </p>
                            
                            <div className="collapse" id="collap3" aria-labelledby="head3" data-parent="#cap">
                                <div className="">
                                    <ul>
                                        {rescat}
                                    </ul>
                                </div>
                            </div>
                            {/* Forth One */}
                            <p className="ml-4" id="head4">
                                    <a className="text-muted" data-toggle="collapse" href="#collap4">JEWELRY</a>
                                </p>
                            
                            <div className="collapse" id="collap4" aria-labelledby="head4" data-parent="#cap">
                                <div className="">
                                    <ul>
                                        {rescat}
                                    </ul>
                                </div>
                            </div>
                        


                    </div>

              
                </div>

                {/* Prices range */}
                <div className="contianer-fluid mt-5  bord">
                    <h3 className="text-center mr-3 h4">{props.pr.heading}</h3>

                    <div className="container">
                        <form action="">
                        <div className="form-group">
                        <label htmlFor="price">{props.pr.label}</label>
                        <select   id="price" className="form-group d-block w-75 p-2">
                            
                            {opt}
                        </select>

                        </div>

                        <div className="form-group mb-5">
                        <label htmlFor="price2">{props.pr.label_2}</label>
                        <select  id="price2" className="form-group d-block w-75 p-2">
                            {opt2}
                        </select>

                        </div>
                        </form>
                    </div>

                </div>
                <div className="container-fluid mt-5 bord  ">
                    <h4 className="text-center mr-3 mt-3">COLOR</h4>
                    <ul className="list-inline ml-4 mt-4">
                        <li className="p-2 bg-primary list-inline-item" ></li>
                        <li className="p-2 bg-secondary list-inline-item"></li>
                        <li className="p-2 bg-warning list-inline-item"></li>
                        <li className="p-2 bg-dark list-inline-item"></li>
                        <li className="p-2 bg-success list-inline-item"></li>
                    </ul>

                </div>

                <div className="container-fluid bord mt-5">
                    <h4 className="text-center mr-4 mt-3">SIZE</h4>

                    <ul className="list-inline ml-4 mt-4 w-75 p-2">
                        <li className="list-inline-item bord mb-3 pl-1">XS</li>
                        <li className="list-inline-item bord pl-1">S</li>
                        <li className="list-inline-item bord pl-1">M</li>
                        <li className="list-inline-item bord pl-1">L</li>
                        <li className="list-inline-item bord pl-1">XL</li>
                        <li className="list-inline-item bord pl-1 ">XXL</li>
                    </ul>

                </div>





                </div>
                <div className="col-md-10 mt-5">
                <div className="container-fluid">
                <div className="row">
                   
                    {res}
                
                </div>
                <div className="row">
                    {res2}

                    {/* <div className="col-4">
                        <div class="container p-5" style={{background:`url(${props.prod.pro[0].img})`,backgroundSize:"cover"}}>
                            
                        </div>

                    </div> */}
                </div>
                <div className="row">
                    {res3}
                </div>

                <div className="row">
                    {res4}
                </div>,
            </div>

                </div>

            </div>
            <div className="container-fluid mt-5 mb-5 ">
                <div className="container pl-5 text-center ">
                    <div className="row">
                        <div className="col-lg-2">

                        </div>
                        <div className="col-lg-10">
                        <nav aria-label="..." >
  <ul className="pagination ">
    <li className="page-item disabled">
      <a className="page-link  " href="#" tabIndex={-1} aria-disabled="true">&laquo; </a>
    </li>
    <li className="page-item"><a className="page-link   px-auto" href="#">1</a></li>
    <li className="page-item " aria-current="page">
      <a className="page-link   px-auto" href="#">2 <span className="sr-only">(current)</span></a>
    </li>
    <li className="page-item"><a className="page-link   px-auto" href="#">3</a></li>
    <li className="page-item">
      <a className="page-link  text-center " href="#">&raquo;</a>
    </li>
  </ul>
</nav>

                        </div>
                    </div>
               
                </div>
     


            </div>
         
        </div>

        
    
    )
}
export default Products;