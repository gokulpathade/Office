// import React from 'react'
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import{Form, Button, Container, Alert } from 'react-bootstrap';
// import AppRegistrationSharpIcon from '@mui/icons-material/AppRegistrationSharp';
import IconButton from "@mui/material/IconButton";
// import PersonAddSharpIcon from "@mui/icons-materia/PersonAddSharpIcon";
import AppRegistrationSharpIcon from '@mui/icons-material/AppRegistrationSharp';
import CancelPresentationSharpIcon from '@mui/icons-material/CancelPresentationSharp';


export default function AddEmployee() {
  //

  const baseURL = "http://localhost:8080/api/AddEmployee";
  const navigate = useNavigate();
  const [empName,        setEmpName            ] = useState("");
  const [empEmail,       setEmpEmail           ] = useState("");
  const [empCompanyName, setEmpCompanyName     ] = useState("");
  const [empDateJoing,   setEmpDateJoing        ] = useState("");
  const [empAddress,     setEmpAddress         ] = useState("");
  const [empGender,      setEmpGender          ] = useState("");
  const [empDateofBirth,  setEmpDateofBirth      ] = useState("");
  const [empMobileNumber,   setEmpMobileNumber   ] = useState("");
  const [empAlterMoNum,    setEmpAlterMoNum     ] = useState("");
  const [empCourse,        setEmpCourse         ] = useState("");
  const [empTechSkill,     setEmpTechSkill      ]     = useState("");
  const [skillRating,      setEmpSkillRating      ] = useState("");
  const [password,       setPassword     ] = useState("");


  const nameChangeHandler = (event) => {
    setEmpName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmpEmail(event.target.value);
    //  baseURL = "http://localhost:8080/api/addEmp";
  };
  const companynameChangeHandler = (event) => {
    setEmpCompanyName(event.target.value);
  };
  const dojChangeHandler = (event) => {
    setEmpDateJoing(event.target.value);
  };
  const addChangeHandler = (event) => {
    setEmpAddress(event.target.value);
  };
  const genderChangeHandler = (event) => {
    setEmpGender(event.target.value);
  };
  const dobChangeHandler = (event) => {
    setEmpDateofBirth(event.target.value);
  };
  const mobileChangeHandler = (event) => {
    setEmpMobileNumber(event.target.value);
  };

  const alternativeChangeHandler = (event) => {
    setEmpAlterMoNum(event.target.value);
  };
  const courseChangeHandler = (event) => {
    setEmpCourse(event.target.value);
  };
  const techskillChangeHandler = (event) => {
    setEmpTechSkill(event.target.value);
  };
  const skillratingChangeHandler = (event) => {
    setEmpSkillRating(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  // const ChangeHandler=(event)=>{}

  const submitActionHandler = (event) => {
    event.preventDefault();
    axios
      .post(baseURL, {
        empName: empName,
        empEmail: empEmail,
        empCompanyName: empCompanyName,
        empDateJoing: empDateJoing,
        empAddress: empAddress,
        empGender: empGender,
        empDateofBirth: empDateofBirth,
        empMobileNumber: empMobileNumber,
        empAlterMoNum: empAlterMoNum,
        empCourse: empCourse,
        empTechSkill: empTechSkill,
        skillRating: skillRating,
        password:password
      })
      .then((response) => {
        alert("Employee data added successfully!");
        cancelHandler();
        navigate("./");
      })
      .catch((error) => {
        alert("error===" + error);
      });
  };

  // rest the values of register form
  const cancelHandler = () => {
    setEmpName("");
    setEmpEmail("");
    setEmpCompanyName("");
    setEmpDateJoing("");
    setEmpAddress("");
    setEmpGender("");
    setEmpDateofBirth("");
    setEmpMobileNumber("");
    setEmpAlterMoNum("");
    setEmpCourse("");
    setEmpTechSkill("");
    setEmpSkillRating("");
    setPassword("");
  };

  //

  //
  //  const[employee, setEmployee]=useState({
  // empName:"",
  // empEmail:"",
  // empCompanyName:"",
  // empDateJoing:"",
  // empAddress:"",
  // empGender:"",
  // empDateofBirth:"",
  // empMobileNumber:"",
  // empAlterMoNum:"",
  // empCourse:"",
  // empTechSkill:"",
  // skillRating:""
  // })
  //
  // const {empName, empEmail, empCompanyName, empDateJoing, empAddress, empGender, empDateofBirth, empMobileNumber, empAlterMoNum  ,
  // empCourse, empTechSkill, skillRating
  // } =employee;
  //
  //

  //  Add new employee details here
  //  const;=(e)=>{
  //  setEmployee({...employee, [e.target.empName]: e.target.value });
  //  };
  //

  // send data to api through form registration
  // const onSubmit = async (e)=>{
  //  for url use this privent method when we click on submit then url going long path url
  // so prevent is use able to minimize the wierd url
  // e.preventDefault();
  // await axios.post("http://localhost:8080/api/addEmp",employee)
  //  navigate("/")
  //
  // }

  return (
    <div>
      <link
        href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        rel="stylesheet"
        id="bootstrap-css"
      />
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
          <h2>Registration</h2>
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
          {/* <div className="form-group"> */}
          {/* <label htmlFor="lastName" className="col-sm-3 control-label">Last Name</label> */}
          {/* <div className="col-sm-9"> */}
          {/* <input type="text" id="lastName" placeholder="Last Name" className="form-control" autofocus /> */}
          {/* </div> */}
          {/* </div> */}
          <div className="form-group">
            <label htmlFor="email" className="col-sm-3 control-label" >
              Email*{" "}
            </label>
            <div className="col-sm-9">
              <input
                type="email"
                id="email"
                placeholder="Email"
                className="form-control"
                name="email"
                value={empEmail}
                onChange={emailChangeHandler}
            required  />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="ComapanyName" className="col-sm-3 control-label">
              Company Name
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="ComapanyName"
                placeholder="Comapany Name"
                className="form-control"
                value={empCompanyName}
                onChange={companynameChangeHandler}
                required
                autofocus
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="birthDate" className="col-sm-3 control-label">
              Date of Joing
            </label>
            <div className="col-sm-9">
              <input
                type="date"
                id="birthDate"
                className="form-control"
                value={empDateJoing}
                onChange={dojChangeHandler}
              />
            </div>
          </div>
          {/* <div className="form-group"> */}
          {/* <label htmlFor="password" className="col-sm-3 control-label">Password*</label> */}
          {/* <div className="col-sm-9"> */}
          {/* <input type="password" id="password" placeholder="Password" className="form-control" /> */}
          {/* </div> */}
          {/* </div> */}
          {/* <div className="form-group"> */}
          {/* <label htmlFor="password" className="col-sm-3 control-label">Confirm Password*</label> */}
          {/* <div className="col-sm-9"> */}
          {/* <input type="password" id="password" placeholder="Password" className="form-control" /> */}
          {/* </div> */}
          {/* </div> */}
          <div className="form-group">
            <label htmlFor="Address" className="col-sm-3 control-label">
              Address*
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                id="Address"
                placeholder="Address"
                className="form-control"
                value={empAddress}
                onChange={addChangeHandler}
                required 
                autofocus
              />
            </div>
          </div>
          <div className="form-group">
            <label className="control-label col-sm-3">Gender</label>
            <div className="col-sm-6">
              <div className="row">
                <div className="col-sm-4">
                  <label className="radio-inline">
                    <input


                   type="radio"
          id="femaleRadio"
          defaultValue="Female"
          value="Female"
          checked={empGender === "Female"} // Check if empGender is "Other"
          onChange={genderChangeHandler}





                    />
                    Female
                  </label>
                </div>
                <div className="col-sm-4">
                  <label className="radio-inline">
                    <input
                     type="radio"
                     id="maleRadio"
                     defaultValue="Male"
                     value="Male"
                     checked={empGender === "Male"} // Check if empGender is "Other"
                     onChange={genderChangeHandler}


                    />
                    Male
                  </label>
                </div>
                <div className="col-sm-4">
                  <label className="radio-inline">
                    <input
                    
                    
                    type="radio"
                    id="otherRadio"
                    defaultValue="Other"
                    value="Other"
                    checked={empGender === "Other"} // Check if empGender is "Other"
                    onChange={genderChangeHandler}
                    
                    
                    
                    />
                    Other
                  </label>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* /.form-group */}
          <div className="form-group">
            <label htmlFor="birthDate" className="col-sm-3 control-label">
              Date of Birth*
            </label>
            <div className="col-sm-9">
              <input
                type="date"
                id="birthDate"
                className="form-control"
                value={empDateofBirth}
                onChange={dobChangeHandler}
                    required
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber" className="col-sm-3 control-label">
              Phone Number*{" "}
            </label>
            <div className="col-sm-9">
              <input 
              min={10}
              max={12}
                type="phoneNumber"
                id="phoneNumber"
                placeholder="Phone number"
                value={empMobileNumber}
                onChange={mobileChangeHandler}
                className="form-control"
                required 
              />
              {/* <span className="help-block">Your phone number won't be disclosed anywhere </span> */}
            </div>
          </div>
          <div className="form-group">
            <label
              htmlFor="AlterphoneNumber"
              className="col-sm-3 control-label"
            >
              Alternative Number{" "}
            </label>
            <div className="col-sm-9">
              <input
               min={10}
               max={12}
                type="AlterphoneNumber"
                id="AlterphoneNumber"
                placeholder="Alternative Phone number"
                className="form-control"
                value={empAlterMoNum}
                onChange={alternativeChangeHandler}
              />
              {/* <span className="help-block">Your phone number won't be disclosed anywhere </span> */}
            </div>
          </div>


          <div className="form-group">
            <label
              htmlFor="AlterphoneNumber"
              className="col-sm-3 control-label"
            >
              Alternative Number{" "}
            </label>
            <div className="col-sm-9">
              <input
               min={10}
               max={12}
                type="Password"
                id="Password"
                placeholder="Enter Your Password"
                className="form-control"
                value={password}
                onChange={passwordChangeHandler}
              />
              {/* <span className="help-block">Your phone number won't be disclosed anywhere </span> */}
            </div>
          </div>


          {/* <div className="form-group">
            <label
              htmlFor="AlterphoneNumber"
              className="col-sm-3 control-label"
            >
              Alternative Number{" "}
            </label>
            <div className="col-sm-9">
              <input
               min={10}
               max={12}
                type="Password"
                id="Password"
                placeholder="Enter Your Password"
                className="form-control"
                value={cpassword}
                onChange={cpasswordChangeHandler}
              />
              {/* <span className="help-block">Your phone number won't be disclosed anywhere </span> */}
            {/* </div>
          </div> */}













          <div className="form-group">
            <label htmlFor="Course" className="col-sm-3 control-label">
             Edu / Course
            </label>
            <div className="col-sm-9">
              {/* <label> </label> */}
              <select
                className="col-sm-9"
                value={empCourse}
                onChange={courseChangeHandler}
              >
                <option value="Course">Course</option>
                <option value="BCA   ">BCA </option>
                <option value="BBA   ">BBA </option>
                <option value="B.Tech">B.Tech</option>
                <option value="MBA   ">MBA </option>
                <option value="MCA   ">MCA </option>
                <option value="M.Tech">M.Tech</option>
              </select>
            </div>{" "}
            {/* <div className="col-sm-9"> */}
            {/* <input */}
            {/* // //  type="text" */}
            {/* // //  id="Course" */}
            {/* // //  placeholder="Course" */}
            {/* // //  className="form-control" */}
            {/* // //  autofocus */}
            {/* // //  /> */}
            {/* //  </div> */}
          </div>
          <div className="form-group">
            <label htmlFor="technicalskill" className="col-sm-3 control-label">
               Skills*
            </label>
            <div className="col-sm-9">
              {/* <label className="reglabel">Tech Skill :</label> */}
              <select
                className="col-sm-9"
                value={empTechSkill}
                onChange={techskillChangeHandler}
                required 
              >
                <option value="TechnicalSkills">Technical Skills</option>
                <option value="Java    ">Java </option>
                <option value="Python  ">Python </option>
                <option value="C       ">C </option>
                <option value="CPP     ">CPP </option>
                <option value="React.js">React.js </option>
                <option value="Node.js ">Node.js </option>
              </select>
            </div>{" "}
            {/* <div className="col-sm-9"> */}
            {/* <input */}
            {/* //  type="text" */}
            {/* //  id="technicalskill" */}
            {/* //  placeholder="technicalskill" */}
            {/* //  className="form-control" */}
            {/* //  autofocus */}
            {/* //  /> */}
            {/* </div> */}
          </div>
          <div className="form-group">
            <label
              htmlFor="TechnicalSkillRating"
              className="col-sm-3 control-label"
            >
             Skill Rating *
            </label>
            <div className="col-sm-9">
              <select
                className="col-sm-9"
                value={skillRating}
                onChange={skillratingChangeHandler}
                required 
              >
                <option value="Skillrating"> Rating Your Skills </option>
                <option value="1"> 1</option>
                <option value="2">2 </option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5 </option>
                {/* <option value="empCourse">12345 </option> */}
                {/* <option value="empCourse">5 </option> */}
              </select>
            </div>{" "}
            {/* <div className="col-sm-9"> */}
            {/* <input */}
            {/* //  type="text" */}
            {/* //  id="TechnicalSkills" */}
            {/* //  placeholder="TechnicalSkills" */}
            {/* //  className="form-control" */}
            {/* //  autofocus */}
            {/* //  /> */}
            {/* </div> */}
          </div>
          {/* <div className="form-group"> */}
          {/* <label htmlFor="Height" className="col-sm-3 control-label">Height* </label> */}
          {/* <div className="col-sm-9"> */}
          {/* <input type="number" id="height" placeholder="Please write your height in centimetres" className="form-control" /> */}
          {/* </div> */}
          {/* </div> */}
          {/* <div className="form-group"> */}
          {/* <label htmlFor="weight" className="col-sm-3 control-label">Weight* </label> */}
          {/* <div className="col-sm-9"> */}
          {/* <input type="number" id="weight" placeholder="Please write your weight in kilograms" className="form-control" /> */}
          {/* </div> */}
          {/* </div> */}
          <div className="form-group">
            <div className="col-sm-9 col-sm-offset-3">
              {/* <span className="help-block">*Required fields</span> */}
            </div>
          </div>
         
          <button type="submit" className="btn btn-primary mx-2">
          <IconButton>
        <AppRegistrationSharpIcon />
      </IconButton>
            Sign Up
          </button>
         



          <button
            type="rest"
            onClick={() => cancelHandler()}
            className="btn btn-danger mx-2"
          >
            <IconButton>
        <CancelPresentationSharpIcon />
      </IconButton>
            
            Cancel
          </button>
          {/* <button type="" className="btn btn-secondary mx-3">
            Login
          </button> */}
        </form>{" "}
        {/* /form */}
      </div>{" "}
      {/* ./container */}
    </div>
  );
}
