package com.service;

import java.util.List;
import javax.management.InvalidAttributeValueException;

import org.hibernate.cache.spi.support.AbstractReadWriteAccess.Item;
import org.springframework.stereotype.Service;
import com.model.ItemModel;
import com.repo.ItemRepo;
import jakarta.persistence.EntityExistsException;

@Service
public class ItemService {
    private final ItemRepo itemRepo;
    public boolean itemExist;
    public ItemModel searchedItem;
    
    
    public ItemService (ItemRepo itemRepo){
        this.itemRepo=itemRepo;
    }

    public List<ItemModel> getAllItems(){
        return itemRepo.findAll();
    }

    public ItemModel getItemById(Long id){
        return itemRepo.findById(id).orElseThrow(()-> new RuntimeException("Couldnt find the item with"+id));
    }

    
    /*********/
    
    public boolean existByName(String name){        
        for(int i=0; i<getAllItems().size();i++){
            if(getAllItems().get(i).getName().equals(name)){
               System.out.println("Input " + name + " Data "+ getAllItems().get(i) );
               itemExist=true;
            }
        }
        return itemExist;
    }


    public ItemModel getItemByName(String name){        
        for(int i=0; i<getAllItems().size();i++){
            if(getAllItems().get(i).getName().equals(name)){
               System.out.println("Input " + name + " Data "+ getAllItems().get(i) );
               searchedItem = getAllItems().get(i);
            }
        }
      return searchedItem;
       
    }
    
    /*********/
    

    public ItemModel createItem(ItemModel item){
        return itemRepo.save(item);
    }

    public ItemModel updateItem(ItemModel item, Long id){
        ItemModel olditem=getItemById(id);

        olditem.setName(item.getName());
        olditem.setPrice(item.getPrice());
        
        return itemRepo.save(olditem);
    }

    public void deleteItembyId(Long id){
        itemRepo.deleteById(id);
    }
}
