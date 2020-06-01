package com.ibm.emart.user.service;


import com.ibm.emart.user.entity.User;

public interface UserService {

  User login(String userName, String password);

  boolean register(User user);

}
