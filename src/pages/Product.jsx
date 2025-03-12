import React from 'react'
import Header from '../components/Header'
// import Servic from '../components/Servic'
import Footer from '../components/Footer'
// import Stproduct from '../data/Stproduct'
import { Link } from 'react-router-dom'

// import { Link } from 'react-router-dom'
import Getproduct from '../components/Getproduct'

function Product() {
  return (
   <>
        <Header />

        {/* <section>
                <div className="ourprodct-2-seo">
                    <div className="container">
                        <div className="row my-3">
                            <div className="col  col-12 col-lg-3 col-md-6 mt-3 ">
                                <Servic imgour={require("../img/pro_1.jpg")} oupname="Carat Solitaire Diamond" ourprice="$78.00" />
                                <button type="button" class="btn penguin-btn">
                                    
                                    <Link to="/" style={{color:'black'}}><i class="fa fa-shopping-cart"></i> BUY NOW</Link>
                                </button>
                            </div>
                            <div className="col  col-12 col-lg-3 col-md-6  mt-3">
                                <Servic imgour={require("../img/pro_2.jpg")} oupname="Pear-Shaped Black" ourprice="$60.00-$100.00" />
                                <button type="button" class="btn penguin-btn">
                                    
                                    <Link to="/" style={{color:'black'}}><i class="fa fa-shopping-cart"></i> BUY NOW</Link>
                                </button>
                            </div>
                            <div className="col  col-12 col-lg-3 col-md-6   mt-3 ">
                                <Servic imgour={require("../img/pro_3.jpg")} oupname="The World Jewelry" ourprice="$115.00" />
                                <button type="button" class="btn penguin-btn">
                                    
                                    <Link to="/" style={{color:'black'}}><i class="fa fa-shopping-cart"></i> BUY NOW</Link>
                                </button>

                            </div>
                            <div className="col  col-12 col-lg-3 col-md-6   mt-3">
                                <Servic imgour={require("../img/pro_4.jpg")} oupname="Women’s Falla Earrings" ourprice="$85.00-$60.00" />
                                <button type="button" class="btn penguin-btn">
                                    
                                    <Link to="/" style={{color:'black'}}><i class="fa fa-shopping-cart"></i> BUY NOW</Link>
                                </button>

                            </div>

                         

                         
                        </div>
                    </div>
                </div>
            </section> */}

            {/* <Getproduct />   */}


           <Getproduct />
          
     
            <Footer/>
   </>
  )
}

export default Product