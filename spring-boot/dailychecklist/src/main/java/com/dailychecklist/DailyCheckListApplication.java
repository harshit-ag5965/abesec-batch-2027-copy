package com.dailychecklist;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class DailyCheckListApplication {

	public static void main(String[] args) {
		System.out.println("I am running my first ever spring boot application");
		SpringApplication.run(DailyCheckListApplication.class, args);
	}

}
