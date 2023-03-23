package com.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import com.model.UserModel;


public interface UserRepo extends JpaRepository<UserModel,Long>{
    
}  