package com.ibm.emart.repository;


import com.ibm.emart.entity.UseEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UseEntity,Integer> {

   UseEntity findByUserName(Integer id);

}
