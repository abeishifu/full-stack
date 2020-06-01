package com.ibm.emart.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="item")
public class Item {
  private Integer itemId;
  private String  itemName;
  private String  itemPrice;
  private String  description;
  private String  catalog;
  private String  sellerId;
  private String  amount;

  public Item(){}

  @Id
  @GeneratedValue
  @Column(name="itemid")
  public Integer getItemId() {
    return itemId;
  }
  public void setItemId(Integer itemId) {
    this.itemId = itemId;
  }
  @Column(name="itemname")
  public String getItemname() {
    return itemName;
  }
  public void setItemname(String itemName) {
    this.itemName = itemName;
  }
  @Column(name="itemprice")
  public String getItemprice() { return itemPrice; }
  public void setItemprice(String itemPrice) {
    this.itemPrice = itemPrice;
  }
  @Column(name="description")
  public String getDescription() {
    return description;
  }
  public void setDescription(String description) {
    this.description = description;
  }
  @Column(name="catalog")
  public String getCatalog() {
    return catalog;
  }
  public void setCatalog(String catalog) {
    this.catalog = catalog;
  }
  @Column(name="sellerid")
  public String getSellerid() {
    return sellerId;
  }
  public void setSellerid(String sellerId) {
    this.sellerId = sellerId;
  }
  @Column(name="amount")
  public String getAmount() {
    return amount;
  }
  public void setAmount(String amount) {
    this.amount = amount;
  }

}