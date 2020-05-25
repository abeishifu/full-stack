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
      String pass = this.userRepository.findByuserName(userName);
      System.out.println(pass);
      System.out.println(password);
      if (pass.equals(password)){

        System.out.println("ggggggggg");
        result = true;
      }
    return result;

  }

}
