package com.example.finalProject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import java.util.*;
import com.example.finalProject.model.userApi;
import com.example.finalProject.service.userApiServiceImpl;
//@CrossOrigin(origins = "*")
@RestController
//@ResponseBody
public class travelPackageController {

	@EnableWebMvc
	public class WebConfig implements WebMvcConfigurer {

		@Override
		public void addCorsMappings(CorsRegistry registry) {

			registry.addMapping("/user")
				.allowedOrigins("http://localhost:3001")
				.allowedMethods("POST","GET","PUT","DELETE")
				.allowedHeaders( "Content-type","Access-Control-Allow-Origin")
			      .exposedHeaders( "Content-type","Access-Control-Allow-Origin")
				.allowCredentials(true).maxAge(3600);
		}
	}

	@Autowired
	private userApiServiceImpl userserviceimpl;
	//@CrossOrigin(origins = "*", allowedHeaders = "*")
	@PostMapping("/user")
	public void adduser(@RequestBody userApi user) {
		userserviceimpl.adduser(user);
	}
	
	@GetMapping("/user")
	public List<userApi> recieveusers() {
		return userserviceimpl.recieveusers();
	} 
	@PutMapping("/user/{email}")
	public void updateuser(@RequestBody userApi user,@PathVariable String email) {
		userserviceimpl.updateuser(user, email);
	}
	
	@DeleteMapping("/user/{email}")
   public void deletebyuser(@PathVariable String email) {
		userserviceimpl.deletebyEmail(email);
	}
}
