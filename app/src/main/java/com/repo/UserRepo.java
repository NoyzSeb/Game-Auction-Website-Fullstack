package com.repo;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;
import org.springframework.stereotype.Repository;

import com.model.UserModel;

@EnableRedisRepositories
public interface UserRepo extends JpaRepository<UserModel,Long>{
    
}  