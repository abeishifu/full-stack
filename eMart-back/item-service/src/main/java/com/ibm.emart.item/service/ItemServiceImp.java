package com.ibm.emart.item.service;

import com.ibm.emart.item.entity.Item;
import com.ibm.emart.item.repository.ItemRepository;
import java.util.List;
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

  public List<Item> getList(){
    return this.itemRepository.getList();
  }

  public void delete(int itemId){
     this.itemRepository.delete(itemId);
  }

  public boolean updateitem(Item item){
    try{
      this.itemRepository.updateitem(item.getItemId(),item.getItemname(),item.getItemprice(),item.getDescription());
      return true;
    }catch (Exception exception){
      return false;
    }
  }

  public boolean buyList(List<Item> items, int userid){
    try{
      items.forEach(item -> this.itemRepository.buy(item.getItemId(),userid));
      return true;
    }catch (Exception exception){
      return false;
    }
  }

}
