package com.hrmsbackend.app.controller;

import java.time.LocalDate;
//import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.neo4j.Neo4jProperties.Authentication;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.ui.Model;
//import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.hrmsbackend.app.model.Employee;
import com.hrmsbackend.app.repository.EmpRepository;
import com.hrmsbackend.app.service.BirthdayWishService;
import com.hrmsbackend.app.service.EmpService;

//import jakarta.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:3000/")
@SessionAttributes("profile")
public class EmpController {

	@Autowired
	private EmpService empService;

	private final EmpRepository employeeRepository;
	private final BirthdayWishService emailService;
    private final PasswordEncoder passwordEncoder;
    

	
public EmpController(EmpService empService, EmpRepository employeeRepository, BirthdayWishService emailService,
			PasswordEncoder passwordEncoder) {
		super();
		this.empService = empService;
		this.employeeRepository = employeeRepository;
		this.emailService = emailService;
		this.passwordEncoder = passwordEncoder;
	}


//  GET ALL EMPLOYEE DETAILS HERE
//	GET LIST OF EMPLOYEE HERE
	@GetMapping("/EmpList")
	public List<Employee> getAllEmp(){
		return empService.getAllEmp();
	}
	
	
//	GET EMPLOYEE DETAIL HERE BY USING PARTICULAR ID
	@GetMapping("/EmpById/{id}")
	public Employee getEmpById(@PathVariable int id) {
		return empService.getEmpById(id);

	}
	
	
//	ADD NEW EMPLOYEE HERE
	@PostMapping("/AddEmployee")
	public Employee addEmployee(@RequestBody Employee emp) {
		return empService.addEmployee(emp);
	}
	
	
//	UPDATE EMPLOYEE DETAILS HERE
	@PutMapping("/UpdateEmployee/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable("id") int id,@RequestBody Employee updatedEmployee) 
	{
	return empService.updateEmployee(id, updatedEmployee);
	}
//		Employee existingEmployee = getEmpById(id);
//
//		if (existingEmployee != null) {
//		    existingEmployee.setEmpName(updatedEmployee.getEmpName());
//            existingEmployee.setEmpEmail(updatedEmployee.getEmpEmail());
//            existingEmployee.setEmpCompanyName(updatedEmployee.getEmpCompanyName());
//            existingEmployee.setEmpDateJoing(updatedEmployee.getEmpDateJoing());
//            existingEmployee.setEmpAddress(updatedEmployee.getEmpAddress());
//            existingEmployee.setEmpGender(updatedEmployee.getEmpGender());
//            existingEmployee.setEmpDateofBirth(updatedEmployee.getEmpDateofBirth());
//            existingEmployee.setEmpMobileNumber(updatedEmployee.getEmpMobileNumber());
//            existingEmployee.setEmpAlterMoNum(updatedEmployee.getEmpAlterMoNum());
//            existingEmployee.setEmpCourse(updatedEmployee.getEmpCourse());
//            existingEmployee.setEmpTechSkill(updatedEmployee.getEmpTechSkill());
//            existingEmployee.setSkillRating(updatedEmployee.getSkillRating());
//            existingEmployee.setEmpRole(updatedEmployee.getEmpRole());
//		return new ResponseEntity<>(EmpRepository, HttpStatus.OK);
//	} else {
//		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
//	}

	
	
//	DELETE EMPLOYEE DETAIL HERE
	@DeleteMapping("/DeleteEmployee/{id}")
	public String deleteEmployeeId(@PathVariable int id) {
		empService.deleteEmployeeId(id);
		return "Employee details deleted Successfully";
	}
	
	
//	EDIT EMPLYEE DETAILS HERE USING BY ID 
  @PostMapping("/EditEmployee/{id}")
  public Employee editEmployeeById(@PathVariable int id, @RequestBody Employee employee) {
      return empService.editEmployeeById(id, employee);
  }
	
  @PutMapping("/UpEmp/{id}")
  public Employee updateEmp(@PathVariable int id, @RequestBody Employee updatedEmployee) {
	  return  empService.updateEmp(id, updatedEmployee);
  }
	
	
	
//	GET ALL EMPLOYEE DETAILS HERE IN LIST 

//	@GetMapping("/getEmp")
//	public List<Employee> getAllEmp() {
//		return empService.findAll();
//	}
//
////	GET EMPLOYEE DETAILS HERE BY ID 
//////EDIT EMPLOYEE DETAILS HERE BY USING ID
//
//
//	@GetMapping("/getEmpById/{id}")
//	public Employee getEmployee(@PathVariable int id) {
//
//		return empService.findById(id);
//
//	}
//
//////	EDIT EMPLOYEE DETAILS HERE 
////	@PostMapping("/editEmp/{id}")
////	public Employee editEmp(@PathVariable int id, HttpServletRequest req) {
////		req.setAttribute("empl", empService.editEmp(id));
////		return empService.save(getEditEmp(id));
////	}
//
//////	EDIT EMPLOYEE DETAILS HERE BY USING ID
////	@GetMapping("/editEmp/{id}")
////	public Employee getEditEmp(@PathVariable int id) {
////		return empService.findById(id);
////	}

//	ADD NEW EMPLOYEE DETAILS HERE 
//	@PostMapping("/addEmp")
//	public Employee saveEmp(@RequestBody Employee emp) {
//		return empService.saveEmp(emp);
//   }
//
//
//	
//	
//	
//	
////	ADD NEW EMPLOYEE DETAILS HERE and
////	SEND EMAIL CONFIRM TO THE EMPLOYEE REGISTRATION
//	@PostMapping("/newRegistration")
//	public ResponseEntity<String> registerEmployee(@RequestBody Employee employee) {
//		Employee savedEmployee = empService.save(employee);
//		if (savedEmployee != null) {
//			emailService.sendRegisterEmail(savedEmployee);
//			return ResponseEntity.ok("you have register successfully !");
//		} else {
//			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send email to the employee");
//		}
//	}
//
//	
//	
//	
//	
////UPDATE EMPLOYEE DETAILS HERE BY ID 
//	
//	
//	
//	
//	@PutMapping("/updateEmp/{id}")
//	public Employee updateEmp(@RequestBody Employee emp, @PathVariable("id") int id) {
////		Employee updatedEmployee = empService.updateEmp(emp, id);
////		if (updatedEmployee != null) {
////			return new ResponseEntity<>(updatedEmployee, HttpStatus.OK);
////		} else {
////			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
////		}
//		
//		
//		return empService.save(emp);
//	}
//
////	//	DELETE EMPLOYEE DETAILS HERE BY USING ID
//
//	@DeleteMapping("/deleteEmp/{id}")
//	public String deleteEmpId(@PathVariable("id") int id) {
//		empService.deleteEmpId(id);
//		return "Emp Data delete Successfully";
//	}
//
//	public List<Employee> getEmpDate(LocalDate empDateofBirth) {
//		return empService.findAll();
//	}
//
////	send birthday Email Here

	@PostMapping("/sendBirthdayEmail")
	public List<Employee> Birthday(@RequestBody LocalDate today) {
		// TODO Auto-generated method stub
		return empService.getEmpDate(today);
	}

////	send birthday Email Here   
	@PostMapping("/sendBirthday")
	public ResponseEntity<String> sendBirthday(@RequestBody Employee employee) {
		Employee savedEmployee = employeeRepository.save(employee);
		if (savedEmployee != null) {
		emailService.sendBirthday(savedEmployee);
		return ResponseEntity.ok("Email send successfully for Birthday wish!");
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send email to the employee");
		}
	}
	
	
	
	
	
//	@GetMapping("/page/{pageNO}/")
//	@GetMapping("/page/{pageNO}")
//	public String findPage(@PathVariable (value="pageNo") int pageNo, Model model) {
//
//	int pageSize = 5;
//	Page<Employee> page = empService.findPage(pageNo, pageSize);
//	List<Employee> listEmp =page.getContent();
//	model.addAttribute("currentPage", pageNo);
//	model.addAttribute("totalpages",page.getTotalPages());
//	model.addAttribute("totalItems", page.getTotalElements());
//	model.addAttribute("listEmp",listEmp);
//	
//	return "index";
//	}
	
	
	

	
         @GetMapping("/employees")
	    public Page<Employee> searchAndPaginateEmps(
	    		@RequestParam(value = "searchTerm", required = false) String searchTerm,
	            @RequestParam(defaultValue = "0") int page,
	            @RequestParam(defaultValue = "10") int size,
	            @RequestParam(defaultValue = "itemName") String sortField,
	            @RequestParam(defaultValue = "asc") String sortOrder
	    ) {
	        Sort sort = Sort.by(Sort.Direction.fromString(sortOrder), sortField);
	        PageRequest pageRequest = PageRequest.of(page, size, sort);
	        return empService.searchEmp(searchTerm, pageRequest);
	    }


//	LOGIN HERE         
         
         
         @PostMapping("/login")
         public ResponseEntity<?> login(@RequestBody Employee employee) {
             Employee emp = empService.findByEmpEmail(employee.getEmpEmail());

             if (emp == null || !passwordEncoder.matches(employee.getPassword(), emp.getPassword())) {
                 return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password.");
             }

             return ResponseEntity.ok("Login successful.");
         }
         
         

         
//  PROFILE DETAILS HERE
//  SHOWING WHEN EMPLOYEE LOGING     
//         
         @GetMapping("/profile")
         public String showProfile(@RequestBody Employee emp,@PathVariable Model model) {
             String profilename =emp.getEmpName(); // Get authenticated username
             Employee employee = employeeRepository.findByEmpEmail(profilename);
             model.addAttribute("employee", employee);
             return "profile"; // Return the profile HTML template
         }
//         
         
         
         
         @GetMapping("/")
         public String home() {
             return "Home Page";
         }

//         @GetMapping("/profile")
//         public String profile() {
//             return "Profile";
//         }
//         
//         
//         
//         
         
         
         
         
         
	
	
	
//
//	List<Employee> findByBirthdayMonthAndBirthdayDay(int monthValue, int dayOfMonth) {
//		return empService.findAll();
//
//	}
//
////	Find Employee Details here by using Search tab
//
//	@GetMapping("/findEmployeeDetails/{empEmail}")
//	public List<Employee> findEmployeeDetails(@PathVariable("empName") String empName,
//			@PathVariable("empEmail") String empEmail, @PathVariable("empCourse") String empCourse,
//			@PathVariable("empTechSkill") String empTechSkill, @PathVariable("skillRating") int skillRating) {
//		return empService.findAll();
//
//	}

//	
//	@GetMapping("/sendMail")
//	public <empEmail> LocalDate getBirthdate(empEmail String) {
//		return empService.findAll();
//	}
//	
//	
//	public List<Employee> findEmployeesWithTodayBirthday(Employee empName)
//	{
//		return null;
//		
//	}
}
