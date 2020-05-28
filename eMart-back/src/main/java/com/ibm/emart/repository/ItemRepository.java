package com.ibm.emart.repository;

import com.ibm.emart.entity.Item;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;


public interface ItemRepository extends JpaRepository<Item,Integer> {

  @Modifying @Transactional
  @Query(nativeQuery = true, value = "insert into item(itemname,itemprice,description,catalog,sellerid)\n"
      + "value (:itemname,:itemprice,:description,:catalog,:sellerid)")
  void newitem(@Param("itemname") String itemname, @Param("itemprice") String itemprice, @Param("description") String description, @Param("catalog") String catalog, @Param("sellerid") String sellerid);

  @Query(nativeQuery = true, value = "select * from item where catalog = 'women'")
  List<Item> getList();


}
