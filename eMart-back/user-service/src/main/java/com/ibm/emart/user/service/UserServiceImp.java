package com.ibm.emart.user.service;

import com.ibm.emart.user.entity.User;
import com.ibm.emart.user.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp implements UserService{

  @Autowired
  UserRepository userRepository;

  @Override
  public User login(String userName, String password){
    User role;
      String pass = this.userRepository.findByuserName(userName);
      if (pass.equals(password)){
        role = this.userRepository.findRole(userName);
        if (role.getUserrole().equals("buyer") || role.getUserrole().equals("seller")){
          return role;
        }
      }
    return null;
  }

  public boolean register(User user){
    try{
      System.out.println(user.getEmail());
      this.userRepository.adduser(user.getUsername(),user.getPassword(),user.getMobilenum(),user.getEmail(),user.getUserrole());
      return true;
    }catch(Exception exception){
      System.out.println(exception);
      return false;
    }
  }


}
