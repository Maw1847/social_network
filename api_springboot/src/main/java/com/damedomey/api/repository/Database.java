package com.damedomey.api.repository;

import com.mongodb.*;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoDatabase;
import com.mongodb.client.model.Filters;

import com.mongodb.client.model.UpdateOptions;
import com.mongodb.client.result.*;
import org.bson.Document;
import org.bson.types.ObjectId;

import java.util.List;
import java.util.Arrays;
import java.util.ArrayList;

import static com.mongodb.client.model.Filters.*;
import static com.mongodb.client.model.Updates.*;
public class Database {
    final private  MongoDatabase db;
    public Database() {
        MongoClient client = MongoClients.create("mongodb://localhost:27017");
        this.db = client.getDatabase("social");
        MongoCollection<Document> users = this.db.getCollection("users");
    }

    public MongoCollection<Document> getCollection(String collectionName){
        return this.db.getCollection(collectionName);
    }
}