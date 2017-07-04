// const mongoClient = require('mongodb').MongoClient;
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

  // ===================== inserting data

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo:', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Ryno',
  //   age: 23,
  //   location: 'South Africa'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert User:', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
