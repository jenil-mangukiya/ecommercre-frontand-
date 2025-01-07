// import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Servic from '../components/Servic'
import Carosal from '../components/Carosal'
import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { RiGalleryLine } from 'react-icons/ri'
import { FaRegStar } from 'react-icons/fa6'
import { IoCartOutline } from 'react-icons/io5'
import Singleproduct from './Singleproduct'
import Getproduct from '../components/Getproduct'



function Shope() {

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
  
      <Header />

      <Carosal />

      <Getproduct/>  


      <Footer />
    </>
  )
}

export default Shope