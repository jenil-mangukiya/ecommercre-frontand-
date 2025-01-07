import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';


function Singleproduct() {
  const { productId } = useParams(); // Using useParams to get productId from the URL
  const [image, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [discription, setDiscription] = useState("");
  const [productType, setProductType] = useState("");
  const [pId, setpId] = useState([])
  const [uId, setuId] = useState([])

  const navigate = useNavigate()
  const location = useLocation();

  useEffect(() => {
    if (productId) {
      axios
        .get(`http://localhost:5000/admin/getsingleproduct/${productId}`)
        .then(function (response) {
          const data = response.data.data;
          console.log(data);
          setImages(data.image || []);
          setTitle(data.title || "");
          setPrice(data.price || "");
          setDiscount(data.discount || "");
          setDiscription(data.discription || "");
          setProductType(data.productType || "");
          setpId(response.data.data._id);
          setuId(sessionStorage.getItem('userid'))

        })
        .catch(function (error) {
          console.error(error);
        });
    }
  }, [productId]);

  const add = (() => {
    if (!sessionStorage.getItem('userid')) {
      navigate("/login", { state: { path: location.pathname } })
    }
    else {
      // console.log(uId);
      // console.log(pId);
      axios.post(`http://localhost:5000/cart/addtocart?userId=${uId}&productId=${pId}`, {
      })
        .then(function (response) {
          console.log(response);
          navigate(`/cart/${uId}`)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  })



  return (
    <>

      <Header />
      <div className='container'>
        <div className='s-pro-sec m-5'>

          <div className='s-pro-main row'>
            <div className='col-lg-6 col-12 d-flex justify-content-center'>
              {image.length > 0 && (
                <>
                  <img src={image[0]} alt="Product" className="main-image" style={{ height: "400px" }} />
                  {image.length > 1 && (
                    <div className="thumbnail-container">
                      {image.slice(1).map((img, index) => (
                        <img key={index} src={img} alt={`Product thumbnail ${index + 1}`} className="thumbnail-image" />
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
            <div className='col-lg-6 col-12 text-lg-start text-center '>
              <p className='about-sub-head-1'>Title :- {title}</p>
              <p className='about-sub-head-2 my-4'>Discription :- {discription}</p>
              <p className='about-sub-head-2 my-4'>ProductType :- {productType}</p>
              <p className='pro-price d-flex justify-content-between'>
                <span className='span-pri'>Price :- ${price} </span>
                <span className='span-dis'>Discount :- {discount}% OFF</span>
              </p>
              <div className='d-flex justify-content-center justify-content-lg-start'>
                <p className='about-btn rounded-pill' onClick={add}>
                  ADD TO CART
                  {/* <Link to={`/cart/${productId}`} style={{ color: 'black' }}></Link> */}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>



      <Footer />
    </>
  )
}

export default Singleproduct