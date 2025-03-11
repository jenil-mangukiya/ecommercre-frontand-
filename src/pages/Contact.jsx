
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

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212.79319540536974!2d72.86151452178298!3d21.21233527559178!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f050dafba93%3A0x10263419fa2972d2!2s52%2C%20Navi%20Shakti%20Vijay%20Society%2C%20Panchdev%20Society%2C%20Mohan%20Nagar%2C%20Varachha%2C%20Surat%2C%20Gujarat%20394530!5e1!3m2!1sen!2sin!4v1738753874352!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style={{ width: "100%", height: "500px" }}></iframe>
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

                                        <p className="strret">
                                            A-52, Navi Shakti Vijay Society, Panchdev Society, Mohan Nagar, Varachha, Surat, Gujarat 394530, India.
                                        </p>


                                        <li className="fs-2"><FaPhoneAlt /></li>
                                        <h4 className="address">Phone</h4>

                                        <p>Mobile: 98247 43819<br />
                                            Mobile:  97264 86287</p>

                                        <li className="fs-2"><MdOutlineEmail /></li>
                                        <h4 className="address">Email</h4>
                                        <p><a href="mailto:info@mahirstones.com">Info@mahirastone.com</a>
                                            <br />
                                            <a href="mailto:support@mahirstones.com">Send email</a>
                                            Support@mahirastone.com <br />
                                            <a href="mailto:conatact@mahirstones.com">Send email</a>Contact@mahirastone.com</p>

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
                                        <span class="wpcf7-form-control-wrap your-message"><textarea name="your-message" cols="40" rows="10" class="wpcf7-form-control wpcf7-textarea" aria-invalid="false" style={{ width: "100%" }}></textarea ></span>

                                        <button className="send mt-5 border-0 py-2 px-5  fs-5 rounded-5">Send</button>
                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}
export default Contact;