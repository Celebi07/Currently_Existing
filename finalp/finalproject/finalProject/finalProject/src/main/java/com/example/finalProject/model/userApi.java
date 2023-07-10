package com.example.finalProject.model;

import jakarta.persistence.*;



@Entity
@Table(name = "user_api_ad")

public class userApi {
  @Id
   private String place;
   private String name;
   private String phonenumber;
   private  String start;
   private  String finish;
   
   public userApi() {
	   
   }
   
   public userApi(String name, String place, String phonenumber, String start, String finish) {
	super();
	this.name = name;
	this.place = place;
	this.phonenumber = phonenumber;
	this.start = start;
	this.finish = finish;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public String getPlace() {
	return place;
}
public void setPlace(String place) {
	this.place = place;
}
public String getPhonenumber() {
	return phonenumber;
}
public void setPhonenumber(String phonenumber) {
	this.phonenumber = phonenumber;
}
public String getStart() {
	return start;
}
public void setStart(String start) {
	this.start = start;
}
public String getFinish() {
	return finish;
}
public void setFinish(String finish) {
	this.finish = finish;
}
   
}
