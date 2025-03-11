import { Link } from "react-router-dom";
import Carosal from "../components/Carosal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Servic from "../components/Servic";
import { useEffect, useState } from "react";
import axios from "axios";
import Getproduct from "../components/Getproduct";
import NewArrivalsSlider from "../components/NewArrivalsSlider";
import BeforeImage from "../img/abu_1.jpg"; // Replace with actual "before" image
import AfterImage from "../img/abu_1.jpg"; // Replace with actual "after" image
import ReactCompareImage from "react-compare-image";
const Home = () => {
    const [data, setData] = useState([]);
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    useEffect(() => {
        axios
            .get(`${BASE_URL}/admin/getallproduct`)
            .then(function (response) {
                // handle success
                console.log(response.data.productData);
                //   setData(response.data.productData);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            });



    })

    return (
        <>
            <Header />
            <Carosal />

            <section className="about-us-section">
      <div className="container">
        <div className="row align-items-center my-5">
          {/* Before-After Hover Effect */}
          <div className="col-lg-6 col-12">
            <div className="hover-effect">
              <img src={BeforeImage} alt="Before" className="before-img" />
              <img src={AfterImage} alt="After" className="after-img" />
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-6 col-12 about-content">
            <h2 className="about-title text-secondary">About Us</h2>
            <p className="about-text">
              <b>
                Mahirastone is an Indian company founded in 2011 with its headquarters and
                manufacturing hub in Surat. As a Natural Diamond Manufacturer, we set
                industry standards in quality, precision, diversity, technological integration,
                production, and social responsibility.
              </b>
            </p>
            <p className="about-text">
              Our products emphasize both breadth and beauty, offering an unrivaled
              selection of round, pear, marquise, princess, emerald, cushion, and heart-shaped
              diamonds in various sizes, grades, and certifications.
            </p>
            <p className="about-text">
              We ensure all rough diamonds used are 100% natural and ethically sourced,
              with production taking place under strict supervision in our state-of-the-art
              facility.
            </p>
            <p className="about-text">
              Mahirastone’s success is driven by ethical business practices and meeting
              customer demands with precision and efficiency.
            </p>
            <Link to="/about-us" className="btn btn-primary mt-4">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>




            {/* ---------------------------------------- */}
            <div className="new-product   text-center mt-5">
                <h3 className="new-arriv ">New Arrivals</h3>
                <span className="add-new ">Add new arrivals to weekly lineup</span>
                <h6 className="Ben mt-2">Bracelets  Earrings  Necklaces</h6>
            </div>
            <NewArrivalsSlider />
            {/* <section className="new-arrivale">
                <div className="servic-2-seo">
                    <div className="container">
                        <div className="row my-5">
                            <div className="col col-12 col-lg-3 col-md-6 mt-3">
                                <Servic seimg={require("../img/ba_1.jpg")} sename="Earrings" className="uniform-size" />
                            </div>
                            <div className="col col-12 col-lg-3 col-md-6 mt-3">
                                <Servic seimg={require("../img/WhatsApp Unknown 2023-02-07 at 11.53.13/WhatsApp Image 2023-02-07 at 11.37.22 (7).jpeg")} sename="Necklaces" className="uniform-size" />
                            </div>
                            <div className="col col-12 col-lg-3 col-md-6 mt-3">
                                <Servic seimg={require("../img/WhatsApp Unknown 2023-02-07 at 11.53.13/WhatsApp Image 2023-02-07 at 11.37.23.jpeg")} sename="Rings" className="uniform-size" />
                            </div>
                            <div className="col col-12 col-lg-3 col-md-6 mt-3">
                                <Servic seimg={require("../img/ba_4.jpg")} sename="Bracelets" className="uniform-size" />
                            </div>
                            <div className="col col-12 col-lg-3 col-md-6 mt-3">
                                <Servic seimg={require("../img/WhatsApp Unknown 2023-02-07 at 11.53.13/watch.jpg")} sename="Watch" className="uniform-size" />
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* -------------------------------our- productr--------------- */}
            <section>
                <div className="our-seo-pro">
                    <div className="container">
                        <div className="row ">
                            <div className="col">
                                <div className="our-product   text-center mt-3">
                                    <h3 className="new-our-pro ">Our Products</h3>
                                    <span className="our-add-new ">Add our products to weekly lineup</span>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Getproduct />



            <section>
                <div className="clint-testimonisal-seo my-4">
                    <div className="container">
                        <div className="row">
                            <div className="col position-relative">
                                <div className="clint-testomal  my-4 text-center">
                                    <h1 className="clin-info">Client Testimonials</h1>
                                    <span className="they say fs-5">What they say</span>
                                </div>
                                <div className="tetimationl-img position-relative">
                                    <img src={require("../img/testimonial_1.jpg")} alt="" className=""></img>
                                </div>
                                <div className="testimonal-big-info   position-absolute ">
                                    <p className="text-1 text-center ">All Perfect !! I have three sites with magento , this theme is the best !! Excellent support , advice theme installation package , sorry for English, are Italian but I had no problem !! Thank you !
                                        <br /><br />  <span className="  John Sullivan text-center"><b>John Sullivan</b></span></p>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="from-our-blog">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center my-2">
                                <h1 className="our-blog-2">From Our Blog</h1>
                                <span className="blog-posts"> There are latest blog posts</span>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            {/* ------------------------------------------------------ */}


            <section className="service-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <Servic fromig={require("../img/nek_1.jpg")} date="April 25, 2018" gldname="Quisque egestas" />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <Servic fromig={require("../img/nek_2.jpg")} date="April 24, 2018" gldname="Post with Gallery" />
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-12">
                            <Servic fromig={require("../img/nek_3.jpg")} date="April 24, 2018" gldname="Maecenas ultricies" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Home;