import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import Navbar from "./Navbar"
import { Navigate } from "react-router-dom";

export default function Home() {
  const [employee, setEmployee] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");

  const navigate = useNavigate();
  const baseURL = "http://localhost:8080/api";

  const fetchEmployeeData = () => {
    axios
      .get(baseURL + "/EmpList", {
        params: {
          page: currentPage,
          search: searchTerm
        }
      })
      .then((response) => {
        setEmployee(response.data);
        // setTotalPages(response.data.totalPages);
      })
      .catch((error) => {
        alert("Something went wrong" + error);
      });
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  const removeEmp = (id) => {
    const confirmed = window.confirm("Are you sure you want to delete Employee?");
    if (confirmed) {
      axios
        .delete(baseURL + "/DeleteEmployee/" + id)
        .then((response) => {
          alert("Employee Id " + id + " deleted successfully !!!");
          fetchEmployeeData();
        })
        .catch((error) => {
          alert("Error occurred while removing Employee: " + error);
        });
    }
  };

  return (
  <><Navbar/>
  
  <div className="contai">
        
      <div className="py-1">
        <h1 className="h1">Welcome to the HRMS</h1>
        {/*  <input
          type="text"
          placeholder="Search Employee..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
       <Button variant="contained" onClick={() => fetchEmployeeData()}>
          Search
        </Button> */}
        <table className="table table-bordered table-sm table-striped">
        
          <thead className="table-dark">
         
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Company Name</th>
              <th scope="col">Date of Join</th>
              <th scope="col">Address</th>
              <th scope="col">Gender</th>
              <th scope="col">Date Of Birth</th>
              <th scope="col">Mobile Number</th>
              <th scope="col">Alternative Number</th>
              <th scope="col">Course</th>
              <th scope="col">Tech Skills</th>
              <th scope="col">Skills Rating</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {employee.map((emp) => (
              <tr key={emp.id}>
                <th scope="row">{emp.id}</th>
                <td>{emp.empName}</td>
                <td>{emp.empEmail}</td>
                <td>{emp.empCompanyName}</td>
                <td>{emp.empDateJoing}</td>
                <td>{emp.empAddress}</td>
                <td>{emp.empGender}</td>
                <td>{emp.empDateofBirth}</td>
                <td>{emp.empMobileNumber}</td>
                <td>{emp.empAlterMoNum}</td>
                <td>{emp.empCourse}</td>
                <td>{emp.empTechSkill}</td>
                <td>{emp.skillRating}</td>
                <td>
                  <Link to={`/Edit/${emp.id}`} className="btn btn-outline-primary mx-2">
                    <IconButton aria-label="edit">
                      <EditIcon />
                    </IconButton>
                  </Link>
                  <IconButton
                    className="btn btn-danger mx-2"
                    onClick={() => removeEmp(emp.id)}
                    aria-label="delete"
                    style={{ backgroundColor: 'red' }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
       
      </div>
    </div>
  
  </>
    
  );
}
