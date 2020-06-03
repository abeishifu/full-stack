package com.ibm.emart.item.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

public class history {

  @Entity
  @Table(name = "history")
  public class Item {

    private Integer itemid;
    private Integer userid;


    @Id
    @GeneratedValue
    @Column(name = "itemid")
    public Integer getItemid() {
      return itemid;
    }
    public void setItemid(Integer itemId) {
      this.itemid = itemid;
    }

    @Column(name = "userid")
    public Integer getUserid() {
      return userid;
    }
    public void setUserid(Integer userid) {
      this.userid = userid;
    }


  }

}
