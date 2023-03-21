package com.repo;


import org.springframework.data.repository.CrudRepository;
import com.model.UserModel;


public interface UserRepo extends CrudRepository<UserModel,Long>{
 
}  