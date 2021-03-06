package com.ibm.emart.item.controller;

import com.ibm.emart.item.entity.Item;
import com.ibm.emart.item.service.ItemService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

  @Autowired
  ItemService itemService;

  @GetMapping("/index")
  public String index() {
    return "index";
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

  @PostMapping("/buyitems")
  @CrossOrigin(origins = "http://localhost:4200",allowCredentials = "true")
//  public Boolean buyList(@RequestParam List<Item> items, @RequestParam int userid) {
  public void buyList() {
    System.out.println("111");
//    return itemService.buyList(items,userid);
  }

}