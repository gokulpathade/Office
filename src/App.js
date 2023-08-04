import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
// import Navbar from "./components/Navbar";
import AddEmployee from "./components/AddEmployee";

import Login from "./components/Login";
import Edit from "./components/Edit";
import Dashboard from "./components/Dashboard";
import Email from "./components/Email";
import Profile from "./components/Profile";

export default function App() {
  return (
    <div className="body">
      <BrowserRouter>
        {/* <Route path="/" element={<Home />} /> */}
        <Routes>
          <Route path="/" element={<Dashboard />} ></Route>
          {/* <Dashboard/> */}

          <Route path="/Home" element={<Home />}></Route>
          {/* <Route path='/Dashboard.jsx' component={<Dashboard/>}></Route> */}

          <Route path="/AddEmployee" element={<AddEmployee />}></Route>
          <Route path="/Profile/:id" element={<Profile />}></Route>
          <Route path="/Edit/:id" element={<Edit />}></Route>

          <Route path="/Contact" element={<Contact />} />
          <Route path="/AboutUs" element={<AboutUs/>} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Email" element={<Email/>}></Route>

           {/*  <Route path="/Login" element={<Login />} />
          <Route path="/Login" element={<Login />} /> 
          <Route path="/Login" element={<Login />} /> */}
        </Routes>

        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}
