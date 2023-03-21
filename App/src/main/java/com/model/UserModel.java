package com.model;

import java.io.Serializable;
import org.springframework.data.redis.core.RedisHash;


import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode
@RedisHash("UserModel")
public class UserModel implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

   
    private String name;
    private String password;
    
    
   
    public String getName(){
        return this.name;
    }
    public String getPassword(){
        return this.password;
    }


        
}
