import React from 'react'

function regitrationformjs() {


    function(){
        $.validator.setDefaults({
            highlight: function(element){
                $(element)
                .closest('.form-group')
                .addClass('has-error')
            },
            unhighlight: function(element){
                $(element)
                .closest('.form-group')
                .removeClass('has-error')
            }
        });
        
        $.validate({
            rules:
            {	
                password: "required",
                birthDate: "required",
                weight: {
                    required:true,
                    number:true
                },
                height:  {
                    required:true,
                    number:true
                },
                email: {
                    required: true,
                    email: true
                }
            },
                messages:{			
                    email: {
                    required: true,
                    email: true
                }
            },
                    password: {
                        required: " Please enter password"
                    },
                    birthDate: {
                        required: " Please enter birthdate"
                    },
                    email: {
                        required: ' Please enter email',
                        email: ' Please enter valid email'
                    },
                    weight: {
                        required: " Please enter your weight",
                        number: " Only numbers allowed"
                    },
                    height: {
                        required: " Please enter your height",
                        number: " Only numbers allowed"
                    },
                }
                
        });
    });


  return (
    <div>
      
    </div>
  )
}

export default regitrationformjs



























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
    action="/editEmp/{id}"
    method="post"
    className="form-horizontal"
    // role="form"
    onSubmit={updateActionHandler}
    // action="/AddEmp.java"
    post
  >
    <h2>Registration</h2>
    <div className="form-group">
      <label htmlFor="firstName" className="col-sm-3 control-label">
        Name
      </label>
      <div className="col-sm-9">
        <input
          type="text"
          id="Name"
          placeholder="Enter Your Full Name"
          className="form-control"
          value={empName}
          // // onChange={nameChangeHandler}
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
      <label htmlFor="email" className="col-sm-3 control-label">
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
          // // onChange={emailChangeHandler}
          required
        />
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
          // // onChange={companynameChangeHandler}
          required
          autofocus
        />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="birthDate" className="col-sm-3 control-label">
        Date of Joing*
      </label>
      <div className="col-sm-9">
        <input
          type="date"
          id="birthDate"
          className="form-control"
          value={empDateJoing}
          // // onChange={dojChangeHandler}
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
        Address
      </label>
      <div className="col-sm-9">
        <input
          type="text"
          id="Address"
          placeholder="Address"
          className="form-control"
          value={empAddress}
          // // onChange={addChangeHandler}
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
                // // onChange={genderChangeHandler}
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
                //  // onChange={genderChangeHandler}
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
                // // onChange={genderChangeHandler}
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
          // // onChange={dobChangeHandler}
        />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="phoneNumber" className="col-sm-3 control-label">
        Phone number{" "}
      </label>
      <div className="col-sm-9">
        <input
          type="phoneNumber"
          id="phoneNumber"
          placeholder="Phone number"
          value={empMobileNumber}
          // // onChange={mobileChangeHandler}
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
        Alternative Phone number{" "}
      </label>
      <div className="col-sm-9">
        <input
          type="AlterphoneNumber"
          id="AlterphoneNumber"
          placeholder="Alternative Phone number"
          className="form-control"
          value={empAlterMoNum}
          // // onChange={alternativeChangeHandler}
        />
        {/* <span className="help-block">Your phone number won't be disclosed anywhere </span> */}
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="Course" className="col-sm-3 control-label">
        Course
      </label>
      <div className="col-sm-9">
        {/* <label> </label> */}
        <select
          className="col-sm-9"
          value={empCourse}
          // // onChange={courseChangeHandler}
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
        Technical Skills
      </label>
      <div className="col-sm-9">
        {/* <label className="reglabel">Tech Skill :</label> */}
        <select
          className="col-sm-9"
          value={empTechSkill}
          // // onChange={techskillChangeHandler}
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
        Technical Skills rating
      </label>
      <div className="col-sm-9">
        <select
          className="col-sm-9"
          value={skillRating}
          // onChange={skillratingChangeHandler}
          required
        >
          <option value="Skillrating">Skill Rating </option>
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
    {/* <button type="submit"  onClick={()=>updateEmp(employee.id)} className="btn btn-primary mx-3"> */}
    {/* Register */}
    {/* </button> */}
    <button
      type="rest"
      // onClick={() => cancelHandler()}
      className="btn btn-danger mx-3"
    >
      Cancel
    </button>
    <button type="" className="btn btn-secondary mx-3">
      Login
    </button>
  </form>{" "}
  {/* /form */}
</div>{" "}
{/* ./container */}
</div>




































































new Fileeeeeeeeeeeeeeeeeeeeeeeeeeeeeee/////////////////////////////////////////////////////////////////////////////
<div>
<link
  href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
  rel="stylesheet"
  id="bootstrap-css"
/>
<link
  href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"
  rel="stylesheet"
  id="bootstrap-css"
/>
<div className="container">
  <form
    className="form-horizontal"
    role="form"
    onSubmit={handleSubmit}
    // method="Get"
  >
    <h2>Registration</h2>
    <div className="form-group">
      <label htmlFor="firstName" className="col-sm-3 control-label">
        Name
      </label>
      <div className="col-sm-9">
        <input
          type="text"
          id="Name"
          placeholder="Enter Your Full Name"
          className="form-control"
          value={employee.empName}
           onChange={handleChange}
          autoFocus
          required
        />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="email" className="col-sm-3 control-label">
        Email*{" "}
      </label>
      <div className="col-sm-9">
        <input
          type="email"
          id="email"
          placeholder="Email"
          className="form-control"
          name="email"
          value={employee.empEmail}
        onChange={handleChange}
          required
        />
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
          value={employee.empCompanyName}
            onChange={handleChange}
        
           required
          autoFocus
        />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="birthDate" className="col-sm-3 control-label">
        Date of Joing*
      </label>
      <div className="col-sm-9">
        <input
          type="date"
          id="birthDate"
          className="form-control"
          value={employee.empDateJoing}
            onChange={handleChange}
        />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="Address" className="col-sm-3 control-label">
        Address
      </label>
      <div className="col-sm-9">
        <input
          type="text"
          id="Address"
          placeholder="Address"
          className="form-control"
          value={employee.empAddress}
            onChange={handleChange}
          required
          autoFocus
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
                checked={employee.empGender === "Female"}
                  onChange={handleChange}
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
                checked={employee.empGender === "Male"}
                  onChange={handleChange}
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
                 checked={employee.empGender === "Other"}
                 onChange={handleChange}
              />
              Other
            </label>
          </div>
        </div>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="birthDate" className="col-sm-3 control-label">
        Date of Birth*
      </label>
      <div className="col-sm-9">
        <input
          type="date"
          id="birthDate"
          className="form-control"
          value={employee.empDateofBirth}
            onChange={handleChange}
        />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="phoneNumber" className="col-sm-3 control-label">
        Phone number{" "}
      </label>
      <div className="col-sm-9">
        <input
          min={10}
          max={12}
          type="phoneNumber"
          id="phoneNumber"
          placeholder="Phone number"
          value={employee.empMobileNumber}
            onChange={handleChange}
          className="form-control"
          required
        />
      </div>
    </div>
    <div className="form-group">
      <label
        htmlFor="AlterphoneNumber"
        className="col-sm-3 control-label"
      >
        Alternative Phone number{" "}
      </label>
      <div className="col-sm-9">
        <input
          min={10}
          max={12}
          type="AlterphoneNumber"
          id="AlterphoneNumber"
          placeholder="Alternative Phone number"
          className="form-control"
           value={employee.empAlterMoNum}
             onChange={handleChange}
        />
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="Course" className="col-sm-3 control-label">
        Course
      </label>
      <div className="col-sm-9">
        <select
          className="col-sm-9"
          value={employee.empCourse}
            onChange={handleChange}
        >
          <option value="Course">Course</option>
          <option value="BCA">BCA</option>
          <option value="BBA">BBA</option>
          <option value="B.Tech">B.Tech</option>
          <option value="MBA">MBA</option>
          <option value="MCA">MCA</option>
          <option value="M.Tech">M.Tech</option>
        </select>
      </div>
    </div>
    <div className="form-group">
      <label htmlFor="technicalskill" className="col-sm-3 control-label">
        Technical Skills
      </label>
      <div className="col-sm-9">
        <select
          className="col-sm-9"
           value={employee.empTechSkill}
             onChange={handleChange}
        >
          <option value="TechnicalSkills">Technical Skills</option>
          <option value="Java">Java</option>
          <option value="Python">Python</option>
          <option value="C">C</option>
          <option value="CPP">CPP</option>
          <option value="React.js">React.js</option>
          <option value="Node.js">Node.js</option>
        </select>
      </div>
    </div>
    <div className="form-group">
      <label
        htmlFor="TechnicalSkillRating"
        className="col-sm-3 control-label"
      >
        Technical Skills rating
      </label>
      <div className="col-sm-9">
        <select
          className="col-sm-9"
         value={employee.skillRating}
           onChange={handleChange}
        >
          <option value="Skillrating">Skill Rating</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
    </div>
    <div className="form-group">
      <div className="col-sm-9 col-sm-offset-3">
        {/* <span className="help-block">*Required fields</span> */}
      </div>
    </div>
    <button type="submit" className="btn btn-primary mx-3">
      Register
    </button>
    <button
      type="reset"
       onClick={handleCancel}
      className="btn btn-danger mx-3"
    >
      Cancel
    </button>
    <button type="" className="btn btn-secondary mx-3">
      Login
    </button>
  </form>
</div>
</div>