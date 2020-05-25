package com.ibm.emart.repository;


import com.ibm.emart.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface UserRepository extends JpaRepository<User,Integer> {

   @Query(nativeQuery = true, value = "select password from user where username=:username")
   String findByuserName(@Param("username") String userName);

   @Query(nativeQuery = true, value = "SELECT * FROM user WHERE id = :id")
   User findByUserId(@Param("id") String id);

}
