import { Result } from 'antd';
import axios from 'axios';
import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
// import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const navigate = useNavigate();



  const userAuth = (e) => {

      e.preventDefault()

      console.log(email+"...."+password);
      axios
      .post("http://localhost:5000/users/login", {
       
        email: email,
        password: password,
        
      })
      .then(function (response) {
        console.log(response.data);
        if(response.status == 200)
          {
            navigate("/cart");
            sessionStorage.setItem('userid',response.data.data.userId)
            
          }
      })
      .catch(function (error) {
        console.log(error);
      });

    
  }


  return (
    <>
      <div className="login-box container" style={{justifyContent:'center'}} >
       
    
        <div className="card">
          <div className="card-body login-card-body">
            <p className="login-box-msg">Sign in to start your session</p>
            <form>
              <div className="input-group mb-3">
                <input type="email" className="form-control" placeholder="Email" onChange={(e) => { setEmail(e.target.value) }} />
                
              </div>
              <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password" onChange={(e) => { setPassword(e.target.value) }} />
                
              </div>
              <div className="row">
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">
                      Remember Me
                    </label>
                  </div>
                </div>
               
                <div className="col-4">
                  <button type="submit" className="btn btn-primary btn-block" onClick={userAuth}>Sign In</button>
                </div>
                
              </div>
            </form>
            <div className="social-auth-links text-center mb-3">
              <p>- OR -</p>
              <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2" /> Sign in using Facebook
              </a>
              <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2" /> Sign in using Google+
              </a>
            </div>
           
            <p className="mb-1">
              <a href="forgot-password.html">I forgot my password</a>
            </p>
            <p className="mb-0">
             
              <Link to='/registraion'>Register a new membership</Link>
            </p>
          </div>
          </div>
      </div>

    </>
  );
};

export default Login;