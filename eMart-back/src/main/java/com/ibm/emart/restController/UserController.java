package com.ibm.emart.restController;


import com.ibm.emart.entity.UseEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

  @GetMapping("/index")
  public String index() {
    return "index";
  }

  @PostMapping("/register")
  public ResponseEntity<UseEntity> register(@RequestBody UseEntity user){
    System.out.println("aaaaa");
    return ResponseEntity.ok(user);
  }


  @PostMapping("/login")
  @CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true")
  public Boolean login(@RequestBody UseEntity user){
    System.out.println("login");
    System.out.println(user.getUserName());
    return true;
  }
}
