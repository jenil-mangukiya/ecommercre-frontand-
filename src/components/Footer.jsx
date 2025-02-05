import './Com.css'
import { IoCall, IoLocation, IoMail } from "react-icons/io5";
const Footer = () => {
    return (
        <>
            <footer className="footer-section">
                <div className="container">
                    <div className="footer-cta pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta d-flex">
                                    <ul className='icon-2'>
                                        <li className='iconfoo fs-3'><IoLocation /></li>
                                    </ul>
                                    <div className="cta-text">
                                        <h4>Find us</h4>
                                        <span>1010 Avenue, sw 54321, chandigarh</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta d-flex">
                                    <ul className='icon-2'>
                                        <li className='iconfoo fs-3'><IoCall /></li>
                                    </ul>
                                    <div className="cta-text">
                                        <h4>Call us</h4>
                                        <span>98247 43819</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 mb-30">
                                <div className="single-cta d-flex">
                                    <ul className='icon-2'>
                                        <li className='iconfoo fs-3'><IoMail /></li>
                                    </ul>
                                    <div className="cta-text">
                                        <h4>Mail us</h4>
                                        <span>mahirastone403@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-content pt-5 pb-5">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-logo">
                                    <img src={require("../img/New-Project-2.png")} style={{ width: "100px", height:"80px" }} alt=""></img>
                                    </div>
                                    <div className="footer-text">
                                        <p>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing
                                            elit,Lorem ipsum dolor sit amet.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Useful Links</h3>
                                    </div>
                                    <ul>
                                        <div>
                                            <li><a href="#">Home</a></li>
                                            <li><a href="#">about</a></li>
                                            <li><a href="#">services</a></li>
                                            <li><a href="#">portfolio</a></li>
                                            <li><a href="#">Contact</a></li>
                                            <li><a href="#">About us</a></li>
                                            <li><a href="#">Our Services</a></li>
                                            <li><a href="#">Expert Team</a></li>
                                            <li><a href="#">Contact us</a></li>
                                            <li><a href="#">Latest News</a></li>
                                        </div>

                                    </ul>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                                <div className="footer-widget">
                                    <div className="footer-widget-heading">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className="footer-text mb-25">
                                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                    </div>
                                    <div className="subscribe-form">
                                        <form action="#">
                                            <input type="text" placeholder="Email Address" />
                                            <button><i className="fab fa-telegram-plane"></i>Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </footer>
        </>
    )
}
export default Footer