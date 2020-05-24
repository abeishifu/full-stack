package com.ibm.emart.repository;

import com.ibm.emart.entity.ItemEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ItemRepository extends JpaRepository<ItemEntity,Integer> {

  ItemEntity findByItemName(Integer id);
}
