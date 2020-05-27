package com.ibm.emart.restController;


import com.ibm.emart.entity.Item;
import com.ibm.emart.entity.User;
import com.ibm.emart.service.ItemService;
import com.ibm.emart.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
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
  ItemService itemService;

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

  @PostMapping("/newitem")
  @CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true")
  public Boolean newitem(@RequestBody Item item){
    System.out.println("id" + item.getSellerid());
    System.out.println("id" + item.getItemname());
    System.out.println("id" + item.getCatalog());
    System.out.println("id" + item.getDescription());
    System.out.println("id" + item.getItemprice());
    return itemService.newitem(item);
  }

}
