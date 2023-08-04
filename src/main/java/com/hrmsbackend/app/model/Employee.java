package com.hrmsbackend.app.model;

import java.time.LocalDate;

import com.fasterxml.jackson.annotation.JsonFormat;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table
public class Employee {

	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
//	@JsonDeserialize(using = LocalDateDeserializer.class)
	@Column
	private int id;
	
	@Column
	private String empName;
	
	@Column(unique = true)
	private String empEmail;
	
	@Column
	private String empCompanyName;
	
	@Column
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
	private LocalDate empDateJoing;
	
	@Column
	private String empAddress;
	
	@Column
	private String empGender;
	
	
	@Column
	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="yyyy-MM-dd")
//	@JsonDeserialize(using = LocalDateDeserializer.class)
	private LocalDate empDateofBirth;
	
	@Column
	private long   empMobileNumber;
	
	@Column
	private long   empAlterMoNum;
	
	@Column
	private String empCourse;
	
	@Column
	private String empTechSkill;
	
	@Column
	private int skillRating;

	@Column
	private String empRole;
	
	@Column
   private String password;
	
	
	
//	constructor with super class

	public Employee() {
		super();
		// TODO Auto-generated constructor stub
	}


	
	
//	constructor with super class with field
	
	
public Employee(int id, String empName, String empEmail, String empCompanyName, LocalDate empDateJoing,
		String empAddress, String empGender, LocalDate empDateofBirth, long empMobileNumber, long empAlterMoNum,
		String empCourse, String empTechSkill, int skillRating, String empRole, String password) {
	super();
	this.id = id;
	this.empName = empName;
	this.empEmail = empEmail;
	this.empCompanyName = empCompanyName;
	this.empDateJoing = empDateJoing;
	this.empAddress = empAddress;
	this.empGender = empGender;
	this.empDateofBirth = empDateofBirth;
	this.empMobileNumber = empMobileNumber;
	this.empAlterMoNum = empAlterMoNum;
	this.empCourse = empCourse;
	this.empTechSkill = empTechSkill;
	this.skillRating = skillRating;
	this.empRole = empRole;
	this.password = password;
}



public int getId() {
	return id;
}



public void setId(int id) {
	this.id = id;
}



public String getEmpName() {
	return empName;
}



public void setEmpName(String empName) {
	this.empName = empName;
}



public String getEmpEmail() {
	return empEmail;
}



public void setEmpEmail(String empEmail) {
	this.empEmail = empEmail;
}



public String getEmpCompanyName() {
	return empCompanyName;
}



public void setEmpCompanyName(String empCompanyName) {
	this.empCompanyName = empCompanyName;
}



public LocalDate getEmpDateJoing() {
	return empDateJoing;
}



public void setEmpDateJoing(LocalDate empDateJoing) {
	this.empDateJoing = empDateJoing;
}



public String getEmpAddress() {
	return empAddress;
}



public void setEmpAddress(String empAddress) {
	this.empAddress = empAddress;
}



public String getEmpGender() {
	return empGender;
}



public void setEmpGender(String empGender) {
	this.empGender = empGender;
}



public LocalDate getEmpDateofBirth() {
	return empDateofBirth;
}



public void setEmpDateofBirth(LocalDate empDateofBirth) {
	this.empDateofBirth = empDateofBirth;
}



public long getEmpMobileNumber() {
	return empMobileNumber;
}



public void setEmpMobileNumber(long empMobileNumber) {
	this.empMobileNumber = empMobileNumber;
}



public long getEmpAlterMoNum() {
	return empAlterMoNum;
}



public void setEmpAlterMoNum(long empAlterMoNum) {
	this.empAlterMoNum = empAlterMoNum;
}



public String getEmpCourse() {
	return empCourse;
}



public void setEmpCourse(String empCourse) {
	this.empCourse = empCourse;
}



public String getEmpTechSkill() {
	return empTechSkill;
}



public void setEmpTechSkill(String empTechSkill) {
	this.empTechSkill = empTechSkill;
}



public int getSkillRating() {
	return skillRating;
}



public void setSkillRating(int skillRating) {
	this.skillRating = skillRating;
}



public String getEmpRole() {
	return empRole;
}



public void setEmpRole(String empRole) {
	this.empRole = empRole;
}



public String getPassword() {
	return password;
}



public void setPassword(String password) {
	this.password = password;
}



@Override
public String toString() {
	return "Employee [id=" + id + ", empName=" + empName + ", empEmail=" + empEmail + ", empCompanyName="
			+ empCompanyName + ", empDateJoing=" + empDateJoing + ", empAddress=" + empAddress + ", empGender="
			+ empGender + ", empDateofBirth=" + empDateofBirth + ", empMobileNumber=" + empMobileNumber
			+ ", empAlterMoNum=" + empAlterMoNum + ", empCourse=" + empCourse + ", empTechSkill=" + empTechSkill
			+ ", skillRating=" + skillRating + ", empRole=" + empRole + ", password=" + password + "]";
}
   
//
	
	
	
	
	
}
