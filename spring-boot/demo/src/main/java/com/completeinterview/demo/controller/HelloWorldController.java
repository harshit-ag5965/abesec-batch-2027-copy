package com.completeinterview.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @GetMapping
    public Integer sayHello() {
        return 123;
    }

    @PostMapping
    public String sayHi() {
        return "Hi World";
    }

}
