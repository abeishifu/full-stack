package com.ibm.emart.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")
public class User {
  private Integer id;
  private String username;
  private String password;
  private String userrole;
  private String email;
  private String mobilenum;
  private String crtdate;

  public User(){}

  @Id
  @GeneratedValue
  @Column(name="id")
  public Integer getId() {
    return id;
  }
  public void setId(Integer id) {
    this.id = id;
  }
  @Column(name="username")
  public String getUsername() {
    return username;
  }
  public void setUsername(String username) {
    this.username = username;
  }
  @Column(name="password")
  public String getPassword() {
    return password;
  }
  public void setPassword(String password) {
    this.password = password;
  }
  @Column(name="userrole")
  public String getUserrole() {
    return userrole;
  }
  public void setUserrole(String userrole) {
    this.userrole = userrole;
  }
  @Column(name="email")
  public String getEmail() {
    return email;
  }
  public void setEmail(String email) {
    this.email = email;
  }
  @Column(name="mobilenum")
  public String getMobilenum() {
    return mobilenum;
  }
  public void setMobilenum(String mobilenum) {
    this.mobilenum = mobilenum;
  }
  @Column(name="crtdate")
  public String getCrtdate() {
    return crtdate;
  }
  public void setCrtdate(String crtdate) {
    this.crtdate = crtdate;
  }
}