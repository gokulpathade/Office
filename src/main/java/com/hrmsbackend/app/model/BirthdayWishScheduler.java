package com.hrmsbackend.app.model;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

//import com.hrmsbackend.app.model.Employee;
import com.hrmsbackend.app.service.BirthdayWishService;

import java.time.LocalDate;
import java.util.List;

@Component
public class BirthdayWishScheduler {
    private final BirthdayWishService birthdayWishService;

    public BirthdayWishScheduler(BirthdayWishService birthdayWishService) {
        this.birthdayWishService = birthdayWishService;
    }

    @Scheduled(cron = "0 0 8 * * ?") // Runs daily at 8:00 PM
    public void sendBirthdayWishesDaily() {
        LocalDate today = LocalDate.now();
        List<Employee> employeesWithBirthdayToday = birthdayWishService.getEmployeesWithBirthday(today);

        for (Employee employee : employeesWithBirthdayToday) {
            birthdayWishService.sendBirthday(employee);
        }
    }
}
