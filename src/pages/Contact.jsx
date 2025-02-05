
import Header from "../components/Header";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <>
            <Header />
           
            <section>
                <div className="contact-seo mt-2 mb-2">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="col text-center my-4">
                                    <h1 className=" Contact-us"> Contact</h1>
                                    <span className="hm-con">Home +  Contact</span>

                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
            {/* -----------------------------google map--------------- */}
            <section>
                <div className="map-seo">
                    <div className="row">
                        <div className="col mb-3">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d44790.54461094319!2d72.83633531679183!3d21.210581118309914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f02397941bd%3A0xf103a23101102563!2sVarachha%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1717477910322!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ width: "100%", height: "500px" }}></iframe>

                        </div>

                    </div>

                </div>
            </section>
            {/* ---------------------------------------- */}
            <section>
                <div className="form-seo my-4">
                    <div className="container">
                        <div className="row">
                            <div className="col col-md-6 col-sm-12">
                                <div className="contact-us-2">
                                    <h2 className="cnt-us">Contact Us</h2>
                                    <ul className="ig-sector ">
                                        <li className="fs-2"><FaHome /></li>
                                        <h4 className="address">Address</h4>

                                        <p className="strret">123 Main Street, Anytown, CA 12345 – USA</p>


                                        <li className="fs-2"><FaPhoneAlt /></li>
                                        <h4 className="address">Phone</h4>

                                        <p>Mobile: (08) 123 456 789<br />
                                            Hotline: 1009 678 456</p>

                                        <li className="fs-2"><MdOutlineEmail /></li>
                                        <h4 className="address">Email</h4>
                                        <p>Info@mahirastone.com
                                        <br />
                                        Support@mahirastone.com <br />
                                        Contact@mahirastone.com</p>

                                    </ul>

                                </div>
                            </div>
                            <div className="col col-md-6 col-sm-12">
                                <form>
                                    <div class="tell-us">
                                        <h3>Tell Us Your Message</h3>

                                    </div>
                                    <div className="fom my-3">
                                        <label className="mb-1"> Your Name (required)</label><br />
                                        <input type=" text" ></input><br />

                                        <label className="mb-1"> Your Email (required)</label><br />
                                        <input type=" text" ></input><br />

                                        <label className="mb-1">Subject</label><br />
                                        <input type=" text" ></input><br />
                                        
                                        <label className="mb-1">Your Message</label><br />
                                        <span class="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false"  style={{width:"100%"}}></textarea ></span>

                                            <button className="send mt-5 border-0 py-2 px-5  fs-5 rounded-5">Send</button>
                                    </div>
                                   
                                </form>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
            <Footer/>
        </>
    )
}
export default Contact;