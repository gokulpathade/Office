package com.hrmsbackend.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
//import org.springframework.scheduling.annotation.EnableScheduling;
//import org.springframework.scheduling.annotation.Scheduled;
//
//import com.hrmsbackend.app.service.BirthdayWishService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;



@SpringBootApplication
//@EnableScheduling
//@Configuration

public class HrmsbackendApplication {
	



	public static void main(String[] args) {
		SpringApplication.run(HrmsbackendApplication.class, args);
	
		

		 
		
		
	}
	
	
	
	 @Bean
	    public PasswordEncoder passwordEncoder() {
	        return new BCryptPasswordEncoder();
	    }

	
	
	
	
	
//	  @Scheduled (cron = "0 0 8 * * *") // Schedule to run every day at 8 AM
//	    public void sendBirthdayWishes() {
//	        birthdayWishService.sendBirthdayWish();
//	    }
//	

}
