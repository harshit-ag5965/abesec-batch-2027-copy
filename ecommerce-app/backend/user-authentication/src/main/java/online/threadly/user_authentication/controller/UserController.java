package online.threadly.user_authentication.controller;

import online.threadly.user_authentication.model.User;
import online.threadly.user_authentication.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/users")
public class UserController {

  private final UserService userService;

  public UserController(UserService userService) {
    this.userService = userService;
  }

  @PostMapping
  public ResponseEntity<User> createUser(@RequestBody User user) {
    System.out.println("Received user: " + user.getName() +  " " + user.getEmail());
    User createdUser = this.userService.createUser(user);
    return ResponseEntity.ok(createdUser);
  }

  @GetMapping("/{email}")
  public ResponseEntity<User> findByEmail(@PathVariable String email) {
    Optional<User> user = this.userService.findByEmail(email);
    return user.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.ok(null));
  }
}
