package com.hrmsbackend.app.repository;


import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

//
//import java.time.LocalDate;
//import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;

import com.hrmsbackend.app.model.Employee;

@Repository
@EnableJpaRepositories

public interface EmpRepository extends JpaRepository<Employee, Integer> {

	@Query(value = "select * from employee where getupdateEmp=?;", nativeQuery = true)


	Employee updateEmp(int id);
	
	

/**  	@Query(value = "select * from employee where getSendEmailEmp=?;", nativeQuery = true)
  *  	Employee SendEmailEmp(String empEmail);
  */
	@Query(value =" select * from employee where empDateofBirth =?;", nativeQuery = true)

	  List<Employee> findEmployeesByBirthdate(LocalDate birthday);
	
	
/*
 * find employee here 
 * 
 * 
 */
	@Query(value =" select * from employee where empName = ? AND empTechSkill = ? ;", nativeQuery = true)
     Page<Employee> findByItemNameContainingIgnoreCase(String searchTerm, Pageable pageable);

//	@Query(value =" select * from employee where empEmail = ? ", nativeQuery = true)
                Employee findByEmpEmail(String empEmail);



//	Employee Employee(String empEmail, String password, List<?> list);

//
//	   Optional<Employee> findOneByEmailAndPassword(String email, String password);
//	    Employee findByEmail(String email);
//

	
	
//	  List<Employee> Birthday(LocalDate dateOfBirth);

	
	
	

}
