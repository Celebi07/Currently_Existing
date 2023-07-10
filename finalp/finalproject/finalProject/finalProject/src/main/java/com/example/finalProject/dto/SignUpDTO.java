package com.example.finalProject.dto;

public class SignUpDTO {
	private int user_id;
	private String name;
	private String email;
	private String password;
	public String getName() {
		return name;
	}
	public void setId(int id) {
		this.user_id = id;
	}
	public int getId() {
		return user_id;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}
