package com.damedomey.api.web.controller;

import com.damedomey.api.model.User;
import com.damedomey.api.repository.Database;
import com.damedomey.api.repository.UserRepository;
import org.bson.json.JsonObject;
import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;

@RestController
public class UserController {
    @Autowired
    private UserRepository repository;

    @GetMapping(value = "/user")
    public List<User> index(){
        new Database();
        return repository.findAll();
    }

    @GetMapping(value = "/user/{id}")
    public User show(@PathVariable String id){
        return repository.findById(id);
    }

    @PostMapping(value = "/register")
    public String add(@RequestBody User user){
        return "/user/" + repository.persist(user);
    }

    @PostMapping(value = "/login")
    public Boolean login(@RequestBody JsonObject param){
        List<User> users = repository.findBy(param);
        System.out.print(users);
        return null;
    }
    @PatchMapping(value = "/user/{id}/edit")
    public String edit(@RequestBody User user, @PathVariable String id){
        return "/user/" + repository.persist(user, id);
    }

    @DeleteMapping(value = "/user/{id}/delete")
    public ResponseEntity<Void> delete(){
        return null;
    }
}
