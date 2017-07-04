// const mongoClient = require('mongodb').MongoClient;
// const ObjectID = require('mongodb').ObjectID;
const { MongoClient, ObjectID } = require('mongodb');

// var obj = new ObjectID();
// console.log(obj); // NOTE: This generates an id like the one created by mongodb for the documents inserted

// var user = { name: 'Ryno', age: 23 };
// var { name } = user; // NOTE: ES6 Destructering objects
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }
  console.log('Connected to mongoDB server.');

  // NOTE: .find returns a pointer (called the cursor) to the documents and not the actual documents
  // db.collection('Todos').find({
  //   _id: new ObjectID('595b6483f32e802c58ea82c1')
  // }).toArray().then((docs) => {
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos:', err);
  // });

  db.collection('Todos').find().count().then((count) => {
    console.log('Todos count:', count);
  }, (err) => {
    console.log('Unable to fetch todos:', err);
  });

  // db.close();
});
