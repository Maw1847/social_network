package com.damedomey.api.repository;

import com.damedomey.api.model.User;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoCollection;
import org.bson.Document;
import org.bson.json.JsonObject;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class UserRepository implements RepositoryInterface<User> {
    MongoCollection<Document> collection;

    public UserRepository() {
        this.collection = new Database().getCollection("users");
    }

    @Override
    public List<User> findAll() {
        List<User> users = new ArrayList<>();
        User user = new User();

        FindIterable<Document> documents = this.collection.find();

        for (Document document :
                documents) {
            user.setObjectId(new ObjectId(document.get("_id").toString()));
            user.setId(document.get("_id").toString());
            user.setUsername(document.getString("username"));
            user.setEmail(document.getString("email"));
            user.setLogin(document.getString("login"));
            user.setPassword(document.getString("password"));
            user.setPassword(document.getString("password"));
            user.setProfilePicture(document.getString("profilePicture"));
            user.setCoverPicture(document.getString("coverPicture"));
            user.setFollowers((String[]) document.get("followers"));
            user.setFollowings((String[]) document.get("followings"));
            user.setAdmin( document.getBoolean("isAdmin"));
            user.setDesc(document.getString("desc"));
            user.setCity(document.getString("city"));
            user.setFrom(document.getString("from"));

            users.add(user);
        }
        return users;
    }

    @Override
    public User findById(String id) {
        User user = new User();
        Document document = this.collection.find(new Document("_id", new ObjectId(id))).first();

        if (document != null) {
            user.setObjectId(new ObjectId(document.get("_id").toString()));
            user.setId(id);
            user.setUsername(document.getString("username"));
            user.setEmail(document.getString("email"));
            user.setLogin(document.getString("login"));
            user.setPassword(document.getString("password"));
            user.setPassword(document.getString("password"));
            user.setProfilePicture(document.getString("profilePicture"));
            user.setCoverPicture(document.getString("coverPicture"));
            user.setFollowers((String[]) document.get("followers"));
            user.setFollowings((String[]) document.get("followings"));
            user.setAdmin(document.getBoolean("isAdmin"));
            user.setDesc(document.getString("desc"));
            user.setCity(document.getString("city"));
            user.setFrom(document.getString("from"));
        }
        return user;
    }

    @Override
    public List<User> findBy(JsonObject criteria) {
        List<User> users = new ArrayList<>();

        Document document = new Document();
        /*if(criteria.length == values.length){
            for (int i = 0; i < criteria.length; i++) {
                document.append(criteria[i], values[i]);
            }
        }*/

        return users;
    }

    @Override
    public String persist(User user) {
        return persist(user, null);
    }

    @Override
    public String persist(User user, String id) {
        Document document = new Document();
        ObjectId documentId = null;
        String res = null;
        if (id == null) {
            document
                    .append("username", user.getUsername())
                    .append("email", user.getEmail())
                    .append("password", user.getPassword())
                    .append("login", user.getLogin())
                    .append("profilePicture", user.getProfilePicture())
                    .append("coverPicture", user.getCoverPicture())
                    .append("followers", user.getFollowers())
                    .append("followings", user.getFollowings())
                    .append("desc", user.getDesc())
                    .append("city", user.getCity())
                    .append("from", user.getFrom())
                    .append("admin", user.getAdmin());

            documentId = this.collection.insertOne(document)
                    .getInsertedId()
                    .asObjectId()
                    .getValue();
            res = documentId.toString();
        }
        return res;
    }

}
