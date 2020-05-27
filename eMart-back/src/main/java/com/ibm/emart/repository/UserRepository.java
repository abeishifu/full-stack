package com.ibm.emart.repository;


import com.ibm.emart.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


public interface UserRepository extends JpaRepository<User,Integer> {

   @Query(nativeQuery = true, value = "select password from user where username=:username")
   String findByuserName(@Param("username") String userName);

   @Query(nativeQuery = true, value = "select * from user where username=:username")
   User findRole(@Param("username") String userName);

   @Modifying@Transactional
   @Query(nativeQuery = true, value = "insert into user(username,password,mobilenum,email,userrole)\n"
       + "value (:username,:password,:mobilenum,:email,:userrole)")
   void adduser(@Param("username") String username,@Param("password") String password,@Param("mobilenum") String mobilenum,@Param("email") String email,@Param("userrole") String userrole);

}
