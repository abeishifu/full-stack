package com.ibm.emart.service;

import com.ibm.emart.entity.Item;
import com.ibm.emart.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ItemServiceImp implements ItemService{

  @Autowired
  ItemRepository itemRepository;

  public boolean newitem(Item item){
    try{
      System.out.println(item.getCatalog());
      this.itemRepository.newitem(item.getItemname(),item.getItemprice(),item.getDescription(),item.getCatalog(),item.getSellerid());
      return true;
    }catch(Exception exception){
      System.out.println(exception);
      return false;
    }
  }

}
