package com.ibm.emart.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="USER")
public class UseEntity {
  private Integer id;
  private String userName;
  private String password;
  private String userRole;
  private String email;
  private String mobileNum;
  private String crtDate;

  public UseEntity(){}

  @Id
  @GeneratedValue
  @Column(name="ID")
  public Integer getId() {
    return id;
  }
  public void setId(Integer id) {
    this.id = id;
  }
  @Column(name="USER_NAME")
  public String getUserName() {
    return userName;
  }
  public void setUserName(String userName) {
    this.userName = userName;
  }
  @Column(name="PASSWORD")
  public String getPassword() {
    return password;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  @Column(name="USER_ROLE")
  public String getUserRole() {
    return userRole;
  }
  public void setUserRole(String userRole) {
    this.userRole = userRole;
  }
  @Column(name="EMAIL")
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  @Column(name="MOBILE_NUM")
  public String getMobileNum() {
    return mobileNum;
  }
  public void setMobileNum(String mobileNum) {
    this.mobileNum = mobileNum;
  }
  @Column(name="CRT_DATE")
  public String getCrtDate() {
    return crtDate;
  }
  public void setCrtDate(String crtDate) {
    this.crtDate = crtDate;
  }

}