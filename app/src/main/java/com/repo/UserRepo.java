package com.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;

import com.model.UserModel;

@EnableRedisRepositories
public interface UserRepo extends JpaRepository<UserModel,Long>{
    
}  