package com.ibm.emart.item.service;

import com.ibm.emart.item.entity.Item;
import java.util.List;

public interface ItemService {

  boolean newitem(Item item);

  List<Item> getList();

  void delete(int itemId);

  boolean updateitem(Item item);

  boolean buyList(List<Item> items, int userid);

}
