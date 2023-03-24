package com.model;

import java.io.Serializable;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.index.Indexed;


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
    @GeneratedValue
    private String id;

    
    private String name;
    private String password;
    private boolean logged;
    
    
   
    


        
}
