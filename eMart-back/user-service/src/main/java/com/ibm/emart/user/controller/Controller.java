package com.ibm.emart.user.controller;


import com.ibm.emart.user.entity.User;
import com.ibm.emart.user.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

  @Autowired
  UserService userService;


  @GetMapping("/index")
  public String index() {
    return "index";
  }

  @PostMapping("/register")
  @CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true")
  public Boolean register(@RequestBody User user){
    System.out.println("aaaaa" + user.getMobilenum());
    return userService.register(user);
  }


  @PostMapping("/login")
  @CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true")
  public User login(@RequestBody User user){
    System.out.println(user.getPassword());
    return userService.login(user.getUsername(),user.getPassword());
//    return "buyer";
  }


}
