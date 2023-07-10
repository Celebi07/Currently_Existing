package com.example.finalProject.services.auth;

import com.example.finalProject.dto.SignUpDTO;
import com.example.finalProject.dto.UserDTO;

public interface AuthService {

	UserDTO createUser(SignUpDTO signUpDTO);

}
