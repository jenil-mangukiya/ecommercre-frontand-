import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FaRegStar } from 'react-icons/fa6';
import { IoCartOutline } from 'react-icons/io5';
import { RiGalleryLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function Getproduct() {

    const [data, setData] = useState([]);



    useEffect(() => {
      axios
        .get("http://localhost:5000/admin/getallproduct")
        .then(function (response) {
          // handle success
          console.log(response.data.productData);
          setData(response.data.productData);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    }, [] );
  
  
  return (
   <>

<section className='shop-sec'>
        <div className="ourprodct-2-seo">
          <div className="container">
            <div className="row my-3">
              <div className="row justify-content-between">
                {data.map(
                  (item) => {

                    return (

                      <>
                        <div key={item._id} className="col-xxl-4 d-flex justify-content-around brd card crde">
                          <div class="outer-image">
                            <img src={item.image[0]} alt="" />
                            <div class="inner-image">
                              <img src={item.image[1]} alt="" />
                            </div>
                            <div class="products-fonts">
                              <div className="product-d card">
                                <h3>{item.title}</h3>

                                <div className="product-type">
                                  <p>{item.productType}</p>
                                </div>
                                {/* <div className="productDescription">
                                  <p>{item.discription}</p>
                                </div> */}
                                <div className="product-price d-flex justify-content-between">
                                  <span className="first-span row">${item.price}</span>
                                  <span className="second-span row">
                                    {item.discount}% OFF

                                  </span>
                                </div>
                              </div>
                              <div className="product-btn d-flex justify-content-between align-items-start">
                                <button
                                  className="update  change-card edit"
                                 
                                >
                                 <Link style={{textDecoration:'none',color:'black'}} to={`/singlepro/${item._id}`}>Buy now</Link>
                                 {/* buy now */}
                                </button>
                              
                              </div>
                            </div>
                            <div class="hovereffect-icons">
                              <div class="lower-icon">
                                <div class="mainthree-icon">
                                  <IoCartOutline />
                                </div>
                                <div class="mainthree-icon">
                                  <FaRegStar />
                                </div>
                                <div class="mainthree-icon">
                                  <RiGalleryLine />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </section>
   
   </>
  )
}

export default Getproduct