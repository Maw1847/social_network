package com.damedomey.api.repository;

import org.bson.json.JsonObject;
import org.bson.types.ObjectId;

import java.util.List;

public interface RepositoryInterface<Model> {
    List<Model> findAll();
    Model findById(String id);
    List<Model> findBy(JsonObject criteria);
    String persist(Model user);
    String persist(Model user, String id);
}
