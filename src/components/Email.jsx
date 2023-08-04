import React, { useState } from "react";

import { Link } from 'react-router-dom'
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import useHistory from "react-router-dom"
import Dashboard from "./Dashboard";



function Email() {

    const [empName,       setEmpName           ] = useState("");

  const [empEmail,       setEmpEmail           ] = useState("");
//   const [text,       setText     ] = useState("");
  const navigate = useNavigate();
  // const history = useHistory();
  const baseURL = "http://localhost:8080/api/sendBirthday";




  const nameChangeHandler = (event) => {
    setEmpName(event.target.value);
  };

  const emailChangeHandler = (event) => {
           setEmpEmail(event.target.value);
    //  baseURL = "http://localhost:8080/api/addEmp";
  };

//   const textChangeHandler = (event) => {
//     setText(event.target.value);
//   };

  const submitActionHandler = (event) => {
    event.preventDefault();
    axios
      .post(baseURL, {
        empName: empName,
        empEmail: empEmail,
    //   text:text
      })
      .then((response) => {
        alert("Email send successfully to the Employee!");
        cancelHandler();
        navigate("/")
        // history.push("/dashboard");
      })
      .catch((error) => {
        alert("error===" + error);
      });
  };


  const cancelHandler = () => {
    setEmpName("");
    setEmpEmail("");
  
    // setText("");
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
        <h2 className='h2'>Write Email</h2>
        <br/><br/>

        <div className="form-group">
            <label htmlFor="firstName" className="col-sm-3 control-label">
              Name*
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="Name"
                placeholder="Enter Your Full Name"
                className="form-control"
                value={empName}
                onChange={nameChangeHandler}
                autofocus
             required
              />
            </div>
          </div>

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

        {/* <div className="form-group">
            <label htmlFor="email" className="col-sm-3 row-cols-3 control-label" >
            Email{" "}
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="text"
                placeholder="Text"
                className="form-control"
                name="Text"
                // value={password}
                onChange={textChangeHandler}
               required  />
            </div>
          </div> */}


        {/* 2 column grid layout for inline styling */}
        <div className="row mb-4">
          <div className="col d-flex justify-content-center">
            {/* Checkbox */}
            {/* <div className="form-check">
              {/* <input className="form-check-input" type="checkbox" defaultValue id="form2Example31" defaultChecked /> */}
              {/* <label className="form-check-label" htmlFor="form2Example31"> Remember me </label> */}
            {/* </div> */}
          </div>
          <div className="col">
            {/* Simple link */}
            {/* <a href="#!">Forgot password?</a> */}
          </div>
        </div>
        {/* Submit button */}
       
        <button type="rest" className="btn btn-danger btn-inline mt-2 mx-2 mb-4">Cancel</button>
        <button type="submit" className="btn btn-primary btn-inline mt-2 mx-2 mb-4">Send Email</button>
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

export default Email
