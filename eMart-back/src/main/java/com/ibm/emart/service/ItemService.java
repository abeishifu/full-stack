package com.ibm.emart.service;

import com.ibm.emart.entity.Item;
import java.util.List;

public interface ItemService {

  boolean newitem(Item item);

  List<Item> getList();
}
