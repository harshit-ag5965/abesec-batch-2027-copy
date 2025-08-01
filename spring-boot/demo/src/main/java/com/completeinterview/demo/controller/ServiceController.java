package com.completeinterview.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/service")
public class ServiceController {

    @GetMapping
    public String services() {
        return "Services";
    }

    @GetMapping("/web-development")
    public String webDevelopment() {
        return "Web Development";
    }

    @GetMapping("/app-development")
    public String appDevelopment() {
        return "App Development";
    }

}
