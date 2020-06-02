package com.ibm.emart.restController;


import com.ibm.emart.entity.Item;
import com.ibm.emart.entity.User;
import com.ibm.emart.service.ItemService;
import com.ibm.emart.service.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
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
    return itemService.newitem(item);
  }

  @GetMapping("/get")
  @CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true")
  public List<Item> getList() {
    return itemService.getList();
  }

  @DeleteMapping("delete/{itemid}")
  @CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true")
  public boolean delete(@PathVariable int itemid) {
     itemService.delete(itemid);
     return true;
  }

  @PostMapping("/updateitem")
  @CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true")
  public Boolean updateitem(@RequestBody Item item){
    return itemService.updateitem(item);
  }
}
