import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

function Cheakout(props) {
    const [name, setname] = useState('');
    const [addone, setaddone] = useState('');
    const [addtwo, setaddtwo] = useState('');
    const [pincode, setpincode] = useState('');
    const [city, setcity] = useState('');
    const [state, setstate] = useState('');
    const [mobile, setmobile] = useState('');
    const [place, setplace] = useState('');
    const [delmethod, setdelmethod] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const adddetails = (e) => {
        e.preventDefault();
        axios
            .post(
                `${BASE_URL}/checkout/add-detail-of-checkout?userId=${sessionStorage.getItem("userid")}&cartId=${sessionStorage.getItem("cartid")}`, {
                name: name,
                addressone: addone,
                addresstwo: addtwo,
                pincode: pincode,
                city: city,
                state: state,
                mobile: mobile,
                place: place,
                typeofdelivery: delmethod
            })
            .then(function (response) {
                console.log(response);
                props.onHide();
                navigate(`${location.state.path}`)
                // navigate(`${location.state.path}`)
            })
            .catch(function (error) {
                console.log(error);
                console.log(name);
                console.log(addone);
                console.log(addtwo);
                console.log(pincode);
                console.log(city);
                console.log(state);
                console.log(mobile);
                console.log(place);
                console.log(delmethod);
            });

    }

    return (
        <>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton={true} className="bg-cyan">
                    <Modal.Title id="contained-modal-title-vcenter">
                        Cheakout Page
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <form className="form-horizontal">
                        <div className="card-body">
                            <div className="form-group row">
                                <label
                                    htmlFor="inputEmail3"
                                    className="col-sm-2 col-form-label"
                                >
                                    Full Name
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputName"
                                        placeholder="Full Name"
                                        value={name}
                                        onChange={(e) => {
                                            setname(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    htmlFor="inputEmail3"
                                    className="col-sm-2 col-form-label"
                                >
                                    Address One
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputName"
                                        placeholder="Address One"
                                        value={addone}
                                        onChange={(e) => {
                                            setaddone(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    htmlFor="inputEmail3"
                                    className="col-sm-2 col-form-label"
                                >
                                    Address Two
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputName"
                                        placeholder="Address Two"
                                        value={addtwo}
                                        onChange={(e) => {
                                            setaddtwo(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    htmlFor="inputEmail3"
                                    className="col-sm-2 col-form-label"
                                >
                                    Pincode
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputName"
                                        placeholder="Pincode"
                                        value={pincode}
                                        onChange={(e) => {
                                            setpincode(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    htmlFor="inputEmail3"
                                    className="col-sm-2 col-form-label"
                                >
                                    City
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputName"
                                        placeholder="City"
                                        value={city}
                                        onChange={(e) => {
                                            setcity(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    htmlFor="inputEmail3"
                                    className="col-sm-2 col-form-label"
                                >
                                    State
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputName"
                                        placeholder="State"
                                        value={state}
                                        onChange={(e) => {
                                            setstate(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="form-group row">
                                <label
                                    htmlFor="inputEmail3"
                                    className="col-sm-2 col-form-label"
                                >
                                    Mobile
                                </label>
                                <div className="col-sm-10">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputName"
                                        placeholder="Mobile"
                                        value={mobile}
                                        onChange={(e) => {
                                            setmobile(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div class="form-group row">
                                <label
                                    htmlFor="inputEmail3"
                                    className="col-sm-2 col-form-label"
                                >
                                    Place
                                </label>
                                <div className="col-sm-10 d-flex" >
                                    <div className="d-flex">
                                        <input type="radio" name="place" value={'Home'} onChange={(e) => { setplace(e.target.value) }} /><span className="py-2 px-2">Home</span>
                                    </div>
                                    <div className="d-flex ms-4">
                                        <input type="radio" name="place" value={'Office'} onChange={(e) => { setplace(e.target.value) }} /><span className="py-2 px-2">Office</span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label
                                    htmlFor="inputEmail3"
                                    className="col-sm-2 col-form-label"
                                >
                                    Payment
                                </label>
                                <div className="col-sm-10 d-flex" >
                                    <div className="d-flex">
                                        <input type="radio" name="payment" value={'cash on delivery'} onChange={(e) => { setdelmethod(e.target.value) }} /><span className="py-2 px-2">Cash</span>
                                    </div>
                                    <div className="d-flex ms-4">
                                        <input type="radio" name="payment" value={'online'} onChange={(e) => { setdelmethod(e.target.value) }} /><span className="py-2 px-2">Online</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /.card-body */}
                        <div className="card-footer d-flex justify-content-between">
                            <div className="col-3">
                                <button className="btn-danger btn" >red</button>
                            </div>
                            <div className="col-3">
                                <button className="btn-success btn" onClick={adddetails}>green</button>
                               
                            </div>
                        </div>
                        {/* /.card-footer */}
                    </form>
                </Modal.Body>
            </Modal>

        </>
    )
}

export default Cheakout


