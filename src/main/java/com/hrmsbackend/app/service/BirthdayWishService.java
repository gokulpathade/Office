













package com.hrmsbackend.app.service;

import java.time.LocalDate;
import java.util.List;
//import java.time.LocalDate;
//import java.util.List;
import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;
import org.springframework.stereotype.Service;

import com.hrmsbackend.app.model.Employee;
import com.hrmsbackend.app.repository.EmpRepository;
//import com.hrmsbackend.app.repository.EmpRepository;

@Service

public class BirthdayWishService {

	
	
	private final EmpRepository empRepository;
	
	@Autowired
   public BirthdayWishService(EmpRepository empRepository) {
       this.empRepository = empRepository;
//        this.javaMailSender = javaMailSender;
   }
	
	 public void sendRegisterEmail(Employee employee) {
	    
	        String subject = "WelCome to Ceinsys !";
	        String body = "Dear " + employee.getEmpName() + "\"\n\n You have register successfully !\" " +employee.getId()+ "\"\n\n this is your id Number !\" " ;
	        
	        
	        JavaMailSender mailSender = getJavaMailSender();
	        SimpleMailMessage message = new SimpleMailMessage();
	        
	        message.setTo(employee.getEmpEmail());
	        message.setSubject(subject);
	        message.setText(body);
	        
	        mailSender.send(message);
	    }
	 
	 
	 
	 
	 
	 
	 
	 
	 public void sendBirthday(Employee employee) {
		 
		 
		 
	       
	        String subject = "Happy Birthday!";
	        String body = "Dear " + employee.getEmpName() + "\"\n\n Wish You Many Many Returns Of The Day, \n Happy Birthday !\" ";
	        
	        
	        JavaMailSender mailSender = getJavaMailSender();
	        SimpleMailMessage message = new SimpleMailMessage();
	        
	        message.setTo(employee.getEmpEmail());
	        message.setSubject(subject);
	        message.setText(body);
	        
	        mailSender.send(message);
	    }
	 
	 
	
	    private JavaMailSender getJavaMailSender() {
	        JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
	        mailSender.setHost("smtp.gmail.com");
	        mailSender.setPort(587);
	        mailSender.setUsername("no.reply.ceinsys@gmail.com");
	        mailSender.setPassword("qgpyqwusgzbriqid");
	        
	        Properties props = mailSender.getJavaMailProperties();
	        props.put("mail.transport.protocol", "smtp");
	        props.put("mail.smtp.auth", "true");
	        props.put("mail.smtp.starttls.enable", "true");
	        props.put("mail.debug", "true");
	        
	        return mailSender;
	    }






	    public List<Employee> getEmployeesWithBirthday(LocalDate today) {
	        return empRepository.findEmployeesByBirthdate(today);
	    }

	
	
	
	
	
	
	
	
//	
//	 // Logic to send the birthday wish email
        // You can use JavaMailSender email library to send the email
////	
	    
	    
//	    @Autowired
////	   public Employee employ;
////	   
//
//	    private final EmpRepository empRepository;
//	    private final JavaMailSender javaMailSender;
//
//	    @Autowired
//	    public BirthdayWishService(EmpRepository empRepository, JavaMailSender javaMailSender) {
//	        this.empRepository = empRepository;
//	        this.javaMailSender = javaMailSender;
//	    }
//
//	    public void sendBirthdayWishes() {
//	        LocalDate today =  LocalDate.now();
//	        List<Employee> emps = empRepository.findAll();
//
//	        for (Employee emp : emps) {
//	            if (isBirthdayToday(emp.getEmpEmail(), today)) {
//	                sendBirthdayEmail(emp);
//	            }
//	        }
//	    }
//
//	    private boolean isBirthdayToday  (LocalDate date, LocalDate today) {
//	        // Implement logic to check if the birthday matches today's date
//	        // You might need to compare only day and month to ignore the year
//	        // For simplicity, let's assume the birthdays are recorded with year
//	    	
//	    	
//	    	// string format is "yyyy-MM-dd"
//	    	  LocalDate birthday = LocalDate.parse(date); 
//	    	    return birthday.getDayOfMonth() == today.getDayOfMonth() && birthday.getMonth() == today.getMonth();
//	    	}
//	    
//	    private void sendBirthdayEmail(Employee employee) {
//	        SimpleMailMessage message = new SimpleMailMessage();
//	        message.setTo(employee.getEmpEmail());                         
//	        //  in the Employee entity
//	        message.setSubject("Happy Birthday!");
//	        message.setText("Dear " + employee.getEmpName() + ",\n\nWishing you a fantastic birthday filled with joy and happiness!\n\nBest regards,\nYour Company Name");
//
//	        javaMailSender.send(message);
//	    }
//	

	
	
	
	
	
	
	
	
	
	
}
