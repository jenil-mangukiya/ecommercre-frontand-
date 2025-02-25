
import { Link } from "react-router-dom";
import Carosal from "../components/Carosal";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Servic from "../components/Servic";
import { useEffect, useState } from "react";
import axios from "axios";
import Getproduct from "../components/Getproduct";

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
            <section>
                <div className="para-1">
                    <div className="container">
                        <div className="row my-5">

                            <div className="col-lg-6 col-12 abc">
                                <img src={require("../img/abu_1.jpg")} alt="" width={{ width: "100%" }}></img>

                            </div>

                            <div className="col col-lg-6 info-1  ">
                                <h2 className="About-Us text-secondary">About Us</h2>
                                <p className="ti-1 my-4"><b>
                                    Mahirastone is an Indian company that was founded in 2011 and has its headquarters and manufacturing hub in Surat. Mahirastone is a Natural Diamond Manufacturer, setting standards not just for the sheer size of its activities, but also for product quality, precision, and diversity, technological integration, production, and broader social responsibility.
                                </b></p>

                                <p className="ti-2 my-4">Our product offers, too, bear the Mahirastone stamp, with an emphasis on both breadth and beauty.
                                </p>

                                <p className="ti-3 my-4">We provide clients with an unrivalled selection of items in round, pears, marquise, princess, emerald, cushion, and heart shaped diamonds. A wide range of sizes, grades, and packaging are available. A mix of certified and non-certified products. Sizes ranging from 1 carat to 3 carats. There are several certification choices. Extensive stockpiles and a wide range of varied packages
                                </p>
                                <p className="ti-4 my-4">
                                    The rough diamonds used are 100% natural and obtained solely from ethical sources. Manufacturing takes place under rigorous supervision at our cutting-edge manufacturing facility.

                                </p>
                                <p className="ti-5 my-4">

                                    Mahirastone success may be attributed to its ethical business methods as well as meeting the needs of its consumers on demand.

                                </p>
                                <button>About US</button>
                            </div>
                            <div className="new-product   text-center mt-5">
                                <h3 className="new-arriv ">New Arrivals</h3>
                                <span className="add-new ">Add new arrivals to weekly lineup</span>
                                <h6 className="Ben mt-2">Bracelets  Earrings  Necklaces</h6>
                            </div>

                        </div>
                    </div>
                </div>
            </section >




            {/* ---------------------------------------- */}

            <section>
                <div className="servic-2-seo">
                    <div className="container">
                        <div className="row my-5">
                            <div className="col  col-12 col-lg-3 col-md-6 mt-3 ">
                                <Servic seimg={require("../img/ba_1.jpg")} sename="Earrings" />
                            </div>
                            <div className="col  col-12 col-lg-3 col-md-6  mt-3">
                                <Servic seimg={require("../img/ba_2.jpg")} sename="Necklaces" />
                            </div>
                            <div className="col  col-12 col-lg-3 col-md-6   mt-3 ">
                                <Servic seimg={require("../img/ba_3.jpg")} sename="Rings" />

                            </div>
                            <div className="col  col-12 col-lg-3 col-md-6   mt-3">
                                <Servic seimg={require("../img/ba_4.jpg")} sename="Bracelets" />

                            </div>
                        </div>
                    </div>
                </div>
            </section>

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