package com.controller;

import java.util.List;

import javax.management.InvalidAttributeValueException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.model.UserModel;
import com.service.UserService;

@RestController
@RequestMapping("api")
public class UserControl {
    @Autowired
    private UserService userService;
    
    @GetMapping("home")
    public ResponseEntity<String> homeWelcome(){
        return ResponseEntity.ok("Welcome to home page.");
    }
    
    @GetMapping("userList")
    public ResponseEntity<List<UserModel>> getAllUsers(){
        return ResponseEntity.ok(userService.getAllUsers());
    }
    
    @GetMapping("userByName")
    public ResponseEntity<UserModel> getUserByName(@RequestBody UserModel user){
        return ResponseEntity.ok(userService.getUserByName(user.getName()));
    }

    @PutMapping("userLogin")
    public ResponseEntity<UserModel> userLogin(@RequestBody UserModel user) throws InvalidAttributeValueException{
        
        return ResponseEntity.ok(userService.loggedUser(user));
    }

    @PostMapping("userCreate")
    public ResponseEntity<UserModel> createUser(@RequestBody UserModel user){
        return ResponseEntity.ok(userService.createUser(user));
    }
    
    @PutMapping("userUpdate/{id}")
    public ResponseEntity<UserModel> updateUser(@RequestBody UserModel user,@PathVariable Long id){
        return ResponseEntity.ok(userService.updateUser(user, id));
    }

    @DeleteMapping("userDelete/{id}")
    public void deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
    }
}
