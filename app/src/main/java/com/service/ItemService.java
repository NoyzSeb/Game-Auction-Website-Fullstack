package com.service;

import java.util.List;

import org.springframework.stereotype.Service;
import com.model.ItemModel;
import com.repo.ItemRepo;

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
        System.out.println("Old Item"+ olditem);
        System.out.println("updated item"+ item);
        
        if(item.getName()!=null)olditem.setName(item.getName());
        if(item.getType()!=null)olditem.setType(item.getType());
        if(item.getPrice()!=null)olditem.setPrice(item.getPrice());
        if(item.getLastOffer()!=null)olditem.setLastOffer(item.getLastOffer());

        
        return itemRepo.save(olditem);
    }

    public void deleteItembyId(Long id){
        System.out.println("Deleted " + id +" "+id.getClass().getName());
        itemRepo.deleteById(id);
    }
}
