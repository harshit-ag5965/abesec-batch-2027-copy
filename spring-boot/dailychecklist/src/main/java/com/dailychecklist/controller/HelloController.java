package com.dailychecklist.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;

@RestController
public class HelloController {

  @GetMapping("/hello")
  public Message hello() {
    return new Message("Hello, this is my first application.");
  }

  @CrossOrigin(origins = "http://localhost:5174/")
  @GetMapping("/todos")
  public List<Todo> getTodos() {
    return List.of(
        new Todo(
            1,
            "Learn Spring Boot",
            "Learn Spring Boot",
            TodoStatus.Todo,
            LocalDateTime.of(2023, 8, 1, 0, 0, 0, 0),
            TodoDifficulty.Easy,
            TodoPriority.P2),
        new Todo(
            2,
            "Learn Spring Boot",
            "Learn Spring Boot",
            TodoStatus.Todo,
            LocalDateTime.of(2023, 8, 1, 0, 0, 0, 0),
            TodoDifficulty.Easy,
            TodoPriority.P2),
        new Todo(
            3,
            "Learn Spring Boot",
            "Learn Spring Boot",
            TodoStatus.Todo,
            LocalDateTime.of(2023, 8, 1, 0, 0, 0, 0),
            TodoDifficulty.Easy,
            TodoPriority.P2));
  }
}
