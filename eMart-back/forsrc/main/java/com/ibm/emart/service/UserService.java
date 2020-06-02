package com.ibm.emart.service;

import com.ibm.emart.entity.User;

public interface UserService {

  User login(String userName, String password);

  boolean register(User user);

}
