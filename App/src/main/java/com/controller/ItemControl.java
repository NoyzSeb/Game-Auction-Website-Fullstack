package com.controller;

import java.util.List;
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

import com.model.ItemModel;
import com.service.ItemService;

@RestController
@RequestMapping("api")
public class ItemControl {
    @Autowired
    private ItemService itemService;
    
    @GetMapping("itemList")
    public ResponseEntity<List<ItemModel>> getAllItems(){
         System.out.println("List Delivered");
        return ResponseEntity.ok(itemService.getAllItems());
    }
    @GetMapping("updateItem/{id}")
    public ResponseEntity<ItemModel> getItemByID(@RequestBody ItemModel item, @PathVariable Long id){
        System.out.println("Delivered Item");
        return ResponseEntity.ok(itemService.getItemById(id));
    }
    
    @GetMapping("itemByName")
    public ResponseEntity<ItemModel> getItemByName(@RequestBody ItemModel item){
        
        return ResponseEntity.ok(itemService.getItemByName(item.getName()));
    }

    @PostMapping("createItem")
    public ResponseEntity<ItemModel> createItem(@RequestBody ItemModel item){
        return ResponseEntity.ok(itemService.createItem(item));
    }
    
    @PutMapping("updateItem/{id}")
    public ResponseEntity<ItemModel> updateItemByID(@RequestBody ItemModel item, @PathVariable Long id){
        System.out.println("Updated");
        return ResponseEntity.ok(itemService.updateItem(item, id));
    }
    
    @DeleteMapping("deleteItem/{id}")
    public void deleteItemById(@PathVariable Long id){
        itemService.deleteItembyId(id);
    }



}
