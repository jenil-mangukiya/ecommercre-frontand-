import React, { useEffect, useState } from "react";
// import Header from './Header'
import axios from "axios";
import { useNavigate } from "react-router-dom";

function User_reg() {
  const navigate = useNavigate();

  //   useEffect(() => {
  //       if (!sessionStorage.getItem('userid')) {
  //           navigate('/login');
  //       }
  //   }, [])

  const [firstname, setfirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setnumber] = useState("");

  const registerUser = (e) => {
    e.preventDefault();
    console.log(email);
    axios
      .post("http://localhost:5000/users/sign-up", {
        firstName: firstname,
        lastName: lastname,
        email: email,
        password: password,
        number: number,
      })
      .then(function (response) {
        console.log(response.data);
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <div className="wrapper d-flex justify-content-center">
        <div className="content-wrapper mt-5 w-50">
          {/* add form section start */}
          <section className="add-pro-form">
            <div className="container-fluid">
              <div className="card card-info">
                <div className="card-header">
                  <h3 className="card-title mt-2 fs-2">
                    User Registation Form
                  </h3>
                </div>
                {/* /.card-header */}
                {/* form start */}
                <form className="form-horizontal">
                  <div className="card-body">
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 col-form-label"
                      >
                        First Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="inputName"
                          placeholder="First Name"
                          value={firstname}
                          onChange={(e) => {
                            setfirstName(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 col-form-label"
                      >
                        Last Name
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="text"
                          className="form-control"
                          id="inputName"
                          placeholder="Last Name"
                          value={lastname}
                          onChange={(e) => {
                            setlastName(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 col-form-label"
                      >
                        Email
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail3"
                          placeholder="Email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 col-form-label"
                      >
                        Password
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="password"
                          className="form-control"
                          id="password"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => {
                            setPassword(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    {/* <div className="form-group row">
                                            <label
                                                htmlFor="inputEmail3"
                                                className="col-sm-2 col-form-label"
                                            >
                                                Re-Pasword
                                            </label>
                                            <div className="col-sm-10">
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="Re-Password"
                                                    placeholder="Re-Password"
                                                    value={repassword}
                                                    onChange={(e)=>{setRepassword(e.target.value)}}
                                                />
                                            </div>
                                        </div> */}
                    <div className="form-group row">
                      <label
                        htmlFor="inputEmail3"
                        className="col-sm-2 col-form-label"
                      >
                        Mobile No.
                      </label>
                      <div className="col-sm-10">
                        <input
                          type="password"
                          className="form-control"
                          id="Re-Password"
                          placeholder="Mobile Number"
                          value={number}
                          onChange={(e) => {
                            setnumber(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  {/* /.card-body */}
                  <div className="card-footer">
                    <button
                      type="submit"
                      className="btn btn-info"
                      onClick={registerUser}
                    >
                      Register
                    </button>
                  </div>
                  {/* /.card-footer */}
                </form>
              </div>
              {/* /.card */}
            </div>
          </section>
          {/* add form section end */}
        </div>

        {/* Control Sidebar */}
        <aside className="control-sidebar control-sidebar-dark">
          {/* Control sidebar content goes here */}
        </aside>
        {/* /.control-sidebar */}
      </div>
    </>
  );
}

export default User_reg;