package com.ibm.emart.restController;


import com.ibm.emart.entity.User;
import com.ibm.emart.repository.UserRepository;
import com.ibm.emart.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

  @Autowired
  UserService userService;

  @Autowired
  private UserRepository userRepository;

  @GetMapping("/index")
  public String index() {
    return "index";
  }

  @PostMapping("/register")
  public ResponseEntity<User> register(@RequestBody User user){
    System.out.println("aaaaa");
    return ResponseEntity.ok(user);
  }


  @PostMapping("/login")
  @CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true")
  public Boolean login(@RequestBody User user){
    System.out.println(user.getPassword());
    return userService.login(user.getUsername(),user.getPassword());
  }
}
