package com.ibm.emart.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ITEM")
public class ItemEntity {
  private Integer itemId;
  private String itemName;
  private String itemPrice;
  private String description;
  private String catalog;
  private String sellerId;
  private String amount;
  private byte image;


  @Id
  @GeneratedValue
  @Column(name="ITEM_ID")
  public Integer getItemId() {
    return itemId;
  }
  public void setItemId(Integer itemId) {
    this.itemId = itemId;
  }
  @Column(name="ITEM_NAME")
  public String getItemName() {
    return itemName;
  }
  public void setItemName(String itemName) {
    this.itemName = itemName;
  }
  @Column(name="ITEM_PRICE")
  public String getItemPrice() { return itemPrice; }
  public void setItemPrice(String itemPrice) {
    this.itemPrice = itemPrice;
  }
  @Column(name="DESCRIPTION")
  public String getDescription() {
    return description;
  }
  public void setDescription(String description) {
    this.description = description;
  }
  @Column(name="CATALOG")
  public String getCatalog() {
    return catalog;
  }
  public void setCatalog(String catalog) {
    this.catalog = catalog;
  }
  @Column(name="SELLER_ID")
  public String getSellerId() {
    return sellerId;
  }
  public void setSellerId(String sellerId) {
    this.sellerId = sellerId;
  }
  @Column(name="AMOUNT")
  public String getAmount() {
    return amount;
  }
  public void setAmount(String amount) {
    this.amount = amount;
  }
  @Column(name="IMAGE")
  public byte getImage() {
    return image;
  }
  public void setImage(byte image) {
    this.image = image;
  }

}