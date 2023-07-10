package com.example.finalProject.services.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.finalProject.dto.SignUpDTO;
import com.example.finalProject.dto.UserDTO;
import com.example.finalProject.model.User;
import com.example.finalProject.repository.UserRepository;

@Service
public class AuthServiceImpl implements AuthService {
	
	@Autowired
	private UserRepository userRepository;

	@Override
	public UserDTO createUser(SignUpDTO signUpDTO) {
		// TODO Auto-generated method stub
		User user = new User();
		user.setName(signUpDTO.getName());
		user.setEmail(signUpDTO.getEmail());
		user.setPassword(new BCryptPasswordEncoder().encode(signUpDTO.getPassword()));
		user.setId(signUpDTO.getId());
		User createdUser = userRepository.save(user);
		UserDTO userDTO = new UserDTO();
		userDTO.setEmail(createdUser.getEmail());
		userDTO.setName(createdUser.getName());
		userDTO.setuser_Id(createdUser.getId());
		return userDTO;
	}

}
