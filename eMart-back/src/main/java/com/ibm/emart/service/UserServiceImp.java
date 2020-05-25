package com.ibm.emart.service;

import com.ibm.emart.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp implements UserService{

  private UserRepository userRepository;

  @Autowired
  public UserServiceImp(UserRepository userRepository){
    this.userRepository = userRepository;
  }

  @Override
  public boolean login(String userName, String password){
    Boolean result = false;
//    try {
//      User user = this.userRepository.findByUserId("1");
      String pass = this.userRepository.findByuserName("u");
//      System.out.println(user);
      System.out.println(pass);
//      if (user.getPassword() == password){
//        result = true;
//      }

//    }

    return result;

  }

}
