package com.hrmsbackend.app.service;

import java.time.LocalDate;
//import java.time.LocalDate;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

//import com.hrmsbackend.app.dto.EmployeeDto;
import com.hrmsbackend.app.model.Employee;

public interface IntEmpService {
	
	
	
	
//	GET ALL EMPLOYEE DETAILS HERE 
	public List<Employee> getAllEmp();
	
//	GET EMPLOYEE DEAYTAILS HERE USING BY ID
	public Employee getEmpById(int id);
	
	
//  Add Employee details
	public Employee addEmployee(Employee emp);
//	public String addEmployee(EmployeeDto empDto);
	
	
//  Update Employee details
//	public Employee updateEmployee(int id, Employee emp);
	public ResponseEntity<Employee> updateEmployee(int id, Employee updatedEmployee); 

	

//  Delete Employee by ID
	public void deleteEmployeeId(int id);
	
	
	
// EDIT EMPLOYEE DETAILS HERE	
	public Employee editEmployeeById(int id, Employee updatedEmployee);

	
	public Employee updateEmp(int id, Employee updatedEmployee);
	
	
	
// PAGENATION HERE  
//   FIND PAGE HERE  
	
	Page<Employee> findPage(int pageNo, int pageSize);
	
	
    public Page<Employee> searchEmp(String searchTerm, Pageable pageable);
	
//    public ResponseEntity<?> login(Employee employee);

	
	
//	Login here
	
//	
//	
//	
//
//	// Get all Employee details
//	public List<Employee> getEmp();
//
//	// Get Employee details by ID
////	public Employee getEmpById(int id);
//
////	// Add Employee details
////	public Employee saveEmp(Employee emp);
//
//	// Edit Employee details
//	public Employee editEmp(int id);
//
////	// Update Employee details
////	public Employee updateEmp(Employee emp, int id);
//
//	// Save updated Employee details
////	public Employee save(Employee updatedEmp);
//
//	
//
//	// Get Employee by ID
	public Employee getEmployee(int id);
//	
//	
//	
//	 Send Birthday Wish To the Employee Here on date 
	public List<Employee> Birthday(LocalDate today);
//
//	List<Employee> findByBirthdayMonthAndBirthdayDay(int monthValue, int dayOfMonth);
    public List<Employee> getEmpDate(LocalDate empDateofBirth);
//
//	
////	 Search Employee Details Here    
////   Find Employee Details Wise 
//	public List<Employee> findEmployeeDetails( String empName, String empEmail, String empCourse, 
//			String empTechSkill, int skillRating);
//
//	


	
	
	
	
	
	//	public Employee sendEmailtoEMP();
	
	
	
//	
////	send Email On BARTHDAY EMAIL 
////	BARTHDAY EMAIL  WISH
//	 void sendBirthdayEmail(String recipientEmail);
//	 
//	 
////	 	send Email ON  ANNIVERSARY DAY 
//	 // EMAIL TO THE EMPLOYEE ANNIVERSARY WISH 
//	    void sendAnniversaryEmail(String recipientEmail);
	
//	public <empEmail> LocalDate getBirthdate(empEmail String);
//	
	
	
	Employee findByEmpEmail(String EmpEmail);	

	Employee loadByEmpEmail(String EmpEmail); 

}
