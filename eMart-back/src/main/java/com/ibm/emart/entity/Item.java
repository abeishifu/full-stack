package com.ibm.emart.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="item")
public class Item {
  private Integer itemid;
  private String  itemname;
  private String  itemprice;
  private String  description;
  private String  catalog;
  private String  sellerid;
  private String  amount;
  private byte    image;

  public Item(){}

  @Id
  @GeneratedValue
  @Column(name="itemid")
  public Integer getItemid() {
    return itemid;
  }
  public void setItemid(Integer itemId) {
    this.itemid = itemid;
  }
  @Column(name="itemname")
  public String getItemname() {
    return itemname;
  }
  public void setItemname(String itemName) {
    this.itemname = itemname;
  }
  @Column(name="itemprice")
  public String getItemprice() { return itemprice; }
  public void setItemprice(String itemPrice) {
    this.itemprice = itemprice;
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
    return sellerid;
  }
  public void setSellerid(String sellerId) {
    this.sellerid = sellerid;
  }
  @Column(name="amount")
  public String getAmount() {
    return amount;
  }
  public void setAmount(String amount) {
    this.amount = amount;
  }
  @Column(name="image")
  public byte getImage() {
    return image;
  }
  public void setImage(byte image) {
    this.image = image;
  }

}