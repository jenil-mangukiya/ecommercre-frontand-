import { Link, useLocation, useNavigate } from "react-router-dom";
import './Com.css';
import { FaBarsStaggered, FaPhone, FaRegCircleUser, FaRegHeart } from "react-icons/fa6";
// import { IoBagOutline } from "react-icons/io5";
// import { PiHandbagFill } from "react-icons/pi";
import { IoIosArrowDown } from "react-icons/io"
import { useEffect, useState } from 'react';
import { Col, Form, Offcanvas, Row } from "react-bootstrap";
import 'animate.css';
import { AiOutlineMenu } from "react-icons/ai";


import Button from 'react-bootstrap/Button';
import { PiHandbagFill } from "react-icons/pi";
import { RiAccountCircleFill } from "react-icons/ri";
import { CiSearch, CiShoppingCart, CiStar, CiUser } from "react-icons/ci";
import { SlEnvolope } from "react-icons/sl";
const Header = () => {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    // =======================================

    const navigate = useNavigate()
    const location = useLocation();
    const [show, setShow] = useState(false);
    const [in_out, setin_out] = useState('');
    const [uId ,setuId] = useState('');

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        if (!sessionStorage.getItem('userid')) {
            setin_out('login')
            console.log(location.pathname);
        }
        else {
            setin_out('logout')
        }

        setuId(sessionStorage.getItem('userid'))
    }, [])
    const click = (() => {
        if (!sessionStorage.getItem('userid')) {
            setin_out('logout')
            navigate("/login", { state: { path: location.pathname } })
            console.log(location.state);
        }
        else {
            setin_out('login')
            sessionStorage.removeItem('userid')
        }
    })

    const hi = (() => {

        if(!sessionStorage.getItem('userid')){
            navigate("/login",{state:{path : location.pathname}})
        }
        else{

            navigate(`/cart/${uId}`)
        }
    }

    )

    return (
        <>


{/* ============================================================================================================================================== */}
 
<header>
                <div className="top-header d-md-block d-none">
                    <div className="container">
                        <div className="top-header-main row align-content-center">
                            <div className='d-md-block d-none col-xl-4  col-md-6'>
                                <div className="contact-sec d-flex">
                                    <div className="top-header-phone me-2">
                                        <FaPhone className="t-icon" /> +0123-456-7899
                                    </div>
                                    <div className="top-header-email">
                                        <SlEnvolope className="t-icon" /> demo@demo.com
                                    </div>
                                </div>
                            </div>
                            <div className="top-header-des col-4  d-xl-block d-none">
                                <p className='d-flex justify-content-center '>
                                    Free metro delivery* Sign Up for $30 off your order!
                                </p>
                            </div>
                            <div className='d-md-block d-none col-xl-4  col-md-6'>
                                <div className="help-sec d-flex justify-content-end">
                                    <p className='ms-3'>Store</p>
                                    <p className='ms-3'>Help</p>
                                    <p className='ms-3 ln-out' onClick={click}>{in_out}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className='d-md-block d-none'></hr>

                <div className='navigation'>
                    <div className='container'>
                        <div className='navigation-main row '>
                            <div className='nav-menu col-4  d-xl-block  align-content-center d-none'>
                                <ul className='d-flex text-capitlize'>
                                    <li className='me-3'><Link className='nav-menus' to="/">Home</Link></li>
                                    <li className='me-3'><Link className='nav-menus' to="/shop">shop</Link></li>
                                    <li className='me-3'><Link className='nav-menus' to="/Product">products</Link></li>
                                    {/* <li className='me-3'><Link className='nav-menus' to="/Blogs">Blogs</Link></li> */}
                                    <li className='me-3'><Link className='nav-menus' to="/about-us">About</Link></li>
                                    <li className='me-3'><Link className='nav-menus' to="/contact">Contect</Link></li>
                                </ul>
                            </div>
                            <div className='d-xl-none d-block col-md-4 col-2 py-3'>
                                <Button variant="" onClick={handleShow}>
                                    <FaBarsStaggered />
                                </Button>

                                <Offcanvas show={show} onHide={handleClose}>
                                    <Offcanvas.Header closeButton>
                                        <Offcanvas.Title>NAVBAR MENU</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                        <ul>
                                            <li className='py-3 px-2'><Link className='nav-menus' to="/">Home</Link></li>
                                            <li className='py-3 px-2'><Link className='nav-menus' to="/Shop">shop</Link></li>
                                            <li className='py-3 px-2'><Link className='nav-menus' to="/Products">products</Link></li>
                                            <li className='py-3 px-2'><Link className='nav-menus' to="/Blogs">Blogs</Link></li>
                                            <li className='py-3 px-2'><Link className='nav-menus' to="/Details">About</Link></li>
                                            <li className='py-3 px-2'><Link className='nav-menus' to="/Contect">Contect</Link></li>
                                        </ul>
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </div>
                            <div className='logo col-4  d-flex  justify-content-center align-content-center  logo'>
                            <img src={require("../img/New-Project-2.png")} style={{ width: "100px", height:"80px" }} alt=""></img>
                            </div>
                            <div className='col-md-4 col-6 d-flex justify-content-end align-items-center fs-4'>
                                <p className='ms-3'><CiSearch /></p>
                                <p className='ms-3'><Link className='nav-menus' to='/registraion'><CiUser /></Link></p>
                                <p className='ms-3'><CiStar /></p>
                                <p className='ms-3' onClick={hi}><CiShoppingCart /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </header >

 
        </>
    )
}

export default Header;