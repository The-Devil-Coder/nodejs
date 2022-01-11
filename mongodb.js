// //Mongo library
// const mongodb = require('mongodb')

// //MOngo client
// const MongoClient = mongodb.MongoClient

// //Object id
// const ObjectId = mongodb.ObjectId

const { MongoClient, ObjectId } = require("mongodb");

// const id = new ObjectId();
// console.log(id);
// console.log(id.toHexString());

const connectionURL = "mongodb://127.0.0.1:27017/?maxPoolSize=20&w=majority";
const databaseName = 'task-manager';


MongoClient.connect(connectionURL, {
    useNewUrlParser: true
}, (error, client) => {
    if (error) {
        return console.log("Error while connecting mongodb!");
    }
    const db = client.db(databaseName);
    console.log("Connected successfully!");

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: "Delavadiya",
    //     age: 22,
    //     phone: "8878457585"
    // }, (error, result) => {
    //     if (error) {
    //         return console.log("Unable to insert new document!");
    //     }
    //     console.log(result.insertedId);

    // })

    // db.collection('users').insertMany([{name: "Dhruv", age: 24}, {name: "Gaurang", age: 23}],
    //      (error, result) => {
    //          if (error){
    //              console.log("Error while inserting users in bulk!");
    //          }
    //          console.log(result);
    //      })

    // fetchOne(db);
    // updateOne(db);
    // fetchOne(db);
    // fetchMany(db);
    // updateMany(db);
    // fetchMany(db);
    deleteOne(db);
})

const fetchOne = (db) => {
    return db.collection("users").findOne({_id: new ObjectId("61b5945e60286f9459db920a")}, (error, user) => {
        if (error) { 
            return console.log("Error while fetching user");
        }
        console.log(user);
        return user
    })
}

const fetchMany = (db) => {
    return db.collection("users").find({age: 22}).toArray((error, users) => {
        if (error){
            console.log("Error while fetching data!");
        }
        console.log(users);
    })
}

const updateOne = (db) => {
    const updatePromise = db.collection("users").updateOne({
        _id: new ObjectId("61b5945e60286f9459db920a")
    }, {
        $set: {
            name: "Delavadiya Gaurang"
        }
    })

    updatePromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error);
    })
}

const updateMany = (db) => {
    const updatePromise = db.collection("users").updateMany({
        age: 22
    }, {
        $set: {
            name: "Delavadiya Gaurang"
        }
    })

    updatePromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error);
    })
}

const deleteOne = (db) => {
    const deletePromise = db.collection("users").deleteMany({
        age: 22
    })

    deletePromise.then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error);
    })
}

