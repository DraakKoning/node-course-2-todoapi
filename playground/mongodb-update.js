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

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('595b7d146fc75fadd2f03cb9')},
  //   {
  //     $set: {
  //       completed: true
  //     }
  //    },
  //   {
  //     returnOriginal: false
  //   }).then((result) => {
  //     console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('595b7f2f6fc75fadd2f03d0a')},
    {
      $set: {
        name: 'Ryno'
      },
      $inc: {
        age: 1
      }
     },
    {
      returnOriginal: false
    }).then((result) => {
      console.log(result);
  });

  // db.close();
});
