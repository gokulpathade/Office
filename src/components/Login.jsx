import React, { useState } from "react";

import { Link } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import useHistory from "react-router-dom"
import Dashboard from "./Dashboard";



function Login() {

  const [empEmail,       setEmpEmail           ] = useState("");
  const [password,       setPassword     ] = useState("");
  const navigate = useNavigate();
  // const history = useHistory();
  const baseURL = "http://localhost:8080/api/login";


  const emailChangeHandler = (event) => {
           setEmpEmail(event.target.value);
    //  baseURL = "http://localhost:8080/api/addEmp";
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitActionHandler = (event) => {
    event.preventDefault();
    axios
      .post(baseURL, {
        empEmail: empEmail,
      password:password
      })
      .then((response) => {
        // alert("Employee login successfully!");
        // cancelHandler();
        navigate("/")
        // history.push("/dashboard");
      })
      .catch((error) => {
        alert("error===" + error);
      });
  };


  const cancelHandler = () => {
  
    setEmpEmail("");
  
    setPassword("");
  };

  return (
    <div>
        <div>

    {/*---- Include the above in your HEAD tag --------*/}
    <link
      href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
      rel="stylesheet"
      id="bootstrap-css"
    />
    {/*---- Include the above in your HEAD tag --------*/}
    <div className="container">
      <form
        className="form-horizontal"
        role="form"
        onSubmit={submitActionHandler}
        // action="/AddEmp.java"
        
      >
        <h2 className='h2'>Login</h2>
        <br/><br/>
    <div className="form-group">
            <label htmlFor="email" className="col-sm-3 control-label" >
              Email{" "}
            </label>
            <div className="col-sm-9">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="form-control"
                name="email"
                // value={empEmail}
                onChange={emailChangeHandler}
               required  />
            </div>
          </div>
        {/* Password input */}

        <div className="form-group">
            <label htmlFor="email" className="col-sm-3 control-label" >
            Password{" "}
            </label>
            <div className="col-sm-9">
              <input
                type="password"
                id="password"
                placeholder="Password"
                className="form-control"
                name="password"
                // value={password}
                onChange={passwordChangeHandler}
               required  />
            </div>
          </div>


        {/* 2 column grid layout for inline styling */}
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            {/* Checkbox */}
            <div className="form-check">
              <input className="form-check-input" type="checkbox" defaultValue id="form2Example31" defaultChecked />
              <label className="form-check-label" htmlFor="form2Example31"> Remember me </label>
            </div>
          </div>
          <div className="col">
            {/* Simple link */}
            {/* <a href="#!">Forgot password?</a> */}
          </div>
        </div>
        {/* Submit button */}
       
        <button type="rest" className="btn btn-danger btn-inline mt-2 mx-2 mb-4">Cancel</button>
        <button type="submit" className="btn btn-primary btn-inline mt-2 mx-2 mb-4">Sign in</button>
        {/* Register buttons */}
        <div className="text-center">
          <p>Not a member ? <a href="./AddEmployee.jsx">  <Link className="btn btn-blue mx-2 shadow-lg" to="/AddEmployee">
         Registration Here
        </Link></a></p>
          <p>or sign up with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f" />
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google" />
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter" />
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github" />
          </button>
        </div>
      </form>
               </div>
            
       </div>
        
     
     
      </div>
  )
}

export default Login
