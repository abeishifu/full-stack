package com.ibm.emart.repository;


import com.ibm.emart.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User,String> {

   @Query(nativeQuery = true, value = "select password from user where id = 1")
   String findByuserName(@Param("id") String id);

   @Query(nativeQuery = true, value = "SELECT * FROM user WHERE id = :id")
   User findByUserId(@Param("id") String id);

}
