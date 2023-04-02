package com.repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.redis.repository.configuration.EnableRedisRepositories;

import com.model.ItemModel;

@EnableRedisRepositories
public interface ItemRepo extends JpaRepository<ItemModel,Long> {
    
}
