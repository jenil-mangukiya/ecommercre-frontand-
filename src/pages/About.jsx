// import { Accordion } from "react-bootstrap";
// import Header from "../components/Header";
// import Smcard from "../components/Smcard";
// import Footer from "../components/Footer";

// const About = () => {
//     return (
//         <>
//             <Header />

//             <section>
//                 <div className="tbut-seo mt-2 mb-5">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col text-center my-4">
//                                 <h1 className="Abut-us">About Us</h1>
//                                 <span className="hm-ab">Home + About Us</span>

//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* ------------------------------------------------------------------------------ */}


//             <section>
//                 <div className=" nusa-1-seo">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col  ">
//                                 <div className="digital-img mt-0 mb-4">
//                                     {/* <img src={require("../img/home_1.jpg")} alt="" style={{ width: "100%" }} ></img>
//                                      */}
//                                      <img src={require("../img/about-us.jpg")} alt="" style={{ width: "100%" }} />
//                                 </div>
//                                 <div className="digital-info-2  text-center">
//                                     <h3 className=" are-a-digital  mt-5">We Are A Digital Agency Focused On Delivering <br />Content And Utility User-Experiences. </h3>

//                                     <p className="Adipiscing-lacus my-4">Adipiscing lacus ut elementum, nec duis, tempor       litora turpis dapibus. Imperdiet cursus odio tortor in elementum. Egestas nunc eleifend feugiat lectus laoreet, vel nunc taciti integer cras. Hac pede dis, praesent nibh ac dui mauris sit. Pellentesque mi, facilisi mauris, elit sociis leo sodales accumsan. Iaculis ac fringilla torquent lorem consectetuer, sociosqu phasellus risus urna aliquam, ornare.
//                                     </p>

//                                     <div className="signature-seo my-3">
//                                         <img src={require("../img/signature_1.png")} alt="" style={{ width: "150px" }}></img>
//                                     </div>
//                                 </div>
//                             </div>

//                         </div>
//                     </div>

//                 </div>

//             </section>
//             {/* ------------------------------------------------------------------------ */}
//             <section>
//                 <div className="markating-seo my-2">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col col-md-4 col-12">
//                                 <Smcard dgimg={require("../img/mak_1.png")} dname="Creative Design" stitle="Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim" />
//                             </div>
//                             <div className="col col-md-4  col-12">
//                                 <Smcard dgimg={require("../img/mak_2.png")} dname="100% Money Back Guarantee" stitle="Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim" />
//                             </div>
//                             <div className="col col-md-4 col-12">
//                                 <Smcard dgimg={require("../img/mak_3.png")} dname="Online Support 24/7" stitle="Erat metus sodales eget dolor consectetuer, porta ut purus at et alias, nulla ornare velit amet enim" />
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </section>


//             {/* --------------------------------------------------------------------------------- */}

//             <section>
//                 <div className="whatdo-seo my-2">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col col-md-4 col-12">
//                                 <Smcard quimg={require("../img/what_1.jpg")} doname="What Do We Do?" whtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto" />
//                             </div>
//                             <div className="col col-md-4  col-12">
//                                 <Smcard quimg={require("../img/what_2.jpg")} doname="Our Mission" whtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto" />
//                             </div>
//                             <div className="col col-md-4 col-12">
//                                 <Smcard quimg={require("../img/what_3.jpg")} doname="History Of Us" whtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto" />
//                             </div>

//                         </div>
//                     </div>
//                 </div>
//             </section>
//             {/* --------------------------------------------------------------------------------- */}
//             <section>
//                 <div className='Choose-Us-seo '>
//                     <div className='container'>
//                         <div className='row '>
//                             <div className='col col-md-6 col-12 mt-3'>
//                                 <h3 className='you-choose'>Why You Choose Us ?</h3>
//                                 <p className='ch-info'>Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum.</p>
//                                 <div className="acoding">
//                                     <Accordion>
//                                         <Accordion.Item eventKey="">
//                                             <Accordion.Header className="  text-bg-warning">Fast Free Delivery</Accordion.Header>
//                                             <Accordion.Body>
//                                                 Nam Liber Tempor Cum Soluta Nobis Eleifend Option.
//                                                 Congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me.

//                                                 Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
//                                             </Accordion.Body>

//                                         </Accordion.Item>
//                                         <Accordion.Item eventKey="">
//                                             <Accordion.Header className="text-bg-warning">More Than 30 Years In The Business</Accordion.Header>
//                                             <Accordion.Body>
//                                                 Nam Liber Tempor Cum Soluta Nobis Eleifend Option.
//                                                 Congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me.

//                                                 Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.
//                                             </Accordion.Body>
//                                         </Accordion.Item>
//                                     </Accordion>
//                                 </div>
//                             </div>
//                             <div className="col col-md-6 col-12 mt-3">
//                                 <div className="clint-say">
//                                         <h4 className="clint-says">What Clients Say</h4>
//                                 </div>
//                                 <div className="clit-ig-2 mt-4 ">
//                                   <img src={require ("../img/clint_1.jpg")} alt="" style={{width:"100px"}}></img>
//                                   <div className="few-detail text-center my-4">
//                                     <p className="all-perfact ">All Perfect !! I have three sites with magento , this theme is the best !! Excellent support , advice theme installation package , sorry for English, are Italian but I had no problem !! Thank you !</p>
//                                     <span className="yong-n   text-warning "><b>Kathy Young</b></span><br/>
//                                     <span className="ceo">CEO of SunPark</span>
//                                   </div>
//                                 </div>
//                             </div>
//                         </div>

//                     </div>

//                 </div>
//             </section>
//             <section>
//                 <Footer/>
//             </section>
//         </>
//     )
// }
// export default About;


import { Accordion } from "react-bootstrap";
import Header from "../components/Header";
import Smcard from "../components/Smcard";
import Footer from "../components/Footer";
// import "./App.css"; 

const About = () => {
    return (
        <>
            <Header />
            <section>
                <div className="tbut-seo mt-2 mb-5">
                    <div className="container">
                        <div className="row">
                            <div className="col text-center my-4">
                                <h1 className="Abut-us">About Us</h1>
                                <span className="hm-ab">Home + About Us</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section>
                <div className="nusa-1-seo">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="digital-img mt-0 mb-4">
                                    <img src={require("../img/drive-download-20250126T155300Z-001/shutterstock-1055596775-diamond-merchants-3-0j2t2.webp")} alt="About Us" style={{
                                        width: "100%",
                                        height: "auto",
                                        borderRadius: "10px",
                                        objectFit: "cover",
                                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
                                    }} />
                                </div>
                                <div className="digital-info-2 text-center">
                                    <h3 className="are-a-digital mt-5">
                                        Mahirastone: A Legacy of Excellence in Natural Diamonds
                                    </h3>
                                    <p className="Adipiscing-lacus my-4">
                                        Mahirastone is an Indian company founded in **2011**, with its headquarters and manufacturing hub in **Surat, Gujarat**.
                                        As a leading **Natural Diamond Manufacturer**, we set the standard for **quality, precision, diversity, and ethical responsibility**.
                                        Our success is built on ethical business practices and a commitment to customer satisfaction.
                                    </p>

                                    <h4 className="mt-4">Our Diamond Offerings:</h4>
                                    <ul className="text-start d-inline-block list-unstyled">
                                        <li className="mb-2">
                                            <i className="bi bi-gem text-warning me-2"></i>
                                            <b>Shapes:</b> Round, Pear, Marquise, Princess, Emerald, Cushion, and Heart
                                        </li>
                                        <li className="mb-2">
                                            <i className="bi bi-arrows-expand text-primary me-2"></i>
                                            <b>Sizes:</b> 1 carat to 3 carats
                                        </li>
                                        <li className="mb-2">
                                            <i className="bi bi-patch-check text-success me-2"></i>
                                            <b>Certifications:</b> Certified & Non-Certified options
                                        </li>
                                        <li className="mb-2">
                                            <i className="bi bi-box-seam text-danger me-2"></i>
                                            <b>Stock & Packaging:</b> Extensive inventory with diverse packaging solutions
                                        </li>
                                    </ul>


                                    <p className="mt-3">
                                        All our rough diamonds are **100% natural** and **ethically sourced**, ensuring sustainability and authenticity. Our state-of-the-art manufacturing facility follows **strict quality control** to deliver excellence.
                                    </p>

                                    <div className="signature-seo my-3">
                                        <img src={require("../img/signature_1.png")} alt="Signature" style={{ width: "150px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section>
                <div className="Choose-Us-seo">
                    <div className="container">
                        <div className="row">
                            <div className="col col-md-6 col-12 mt-3">
                                <h3 className="you-choose">Why Choose Us?</h3>
                                <p className="ch-info">
                                    We ensure ethical sourcing, premium quality, and an unmatched selection of diamonds.
                                </p>
                                <Accordion>
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Fast & Free Delivery</Accordion.Header>
                                        <Accordion.Body>
                                            We guarantee quick and reliable shipping worldwide.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>30+ Years of Expertise</Accordion.Header>
                                        <Accordion.Body>
                                            With decades of experience, we bring precision and innovation to diamond manufacturing.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>

                            {/* Client Testimonial */}
                            <div className="col col-md-6 col-12 mt-3">
                                <div className="clint-say">
                                    <h4 className="clint-says">What Clients Say</h4>
                                </div>
                                <div className="clit-ig-2 mt-4 text-center">
                                    <img src={require("../img/clint_1.jpg")} alt="Client" style={{ width: "100px" }} />
                                    <div className="few-detail my-4">
                                        <p className="all-perfact">
                                            "All Perfect!! I have three sites with Magento, and this theme is the best!! Excellent support, advice, and installation package. Thank you!"
                                        </p>
                                        <span className="yong-n text-warning"><b>Kathy Young</b></span><br />
                                        <span className="ceo">CEO of SunPark</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section>
                <div className="container text-center my-5">
                    <h2>Get in Touch</h2>
                    <p><b>Email:</b> <a href="mailto:Mahirastone403@gmail.com">Mahirastone403@gmail.com</a></p>

                    <h4 className="mt-4">Our Locations</h4>
                    <p>
                        <b>📍 Surat Manufacturing Facility:</b><br />
                        A-52 Mohan Nagar, Surat, Gujarat, India
                    </p>
                    <p>
                        <b>📍 Mahirastone Germany Inc.:</b><br />
                        Hof, 95028, Germany
                    </p>

                    <h3 className="mt-4 text-warning">Looking for the perfect diamond? Contact us today!</h3>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </>
    );
};

export default About;
