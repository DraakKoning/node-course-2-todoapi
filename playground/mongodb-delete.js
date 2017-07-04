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

  // deleteMany
  // db.collection('Todos').deleteMany({ text: 'Eat Lunch' }).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
    // db.collection('Todos').deleteOne({ text: 'Eat Lunch'}).then((result) => {
    //   console.log(result);
    // });

  // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({ completed: false}).then((result) => {
    //   console.log(result);
    // });

    db.collection('Users').deleteMany({ name: 'Ryno'}).then((result) => {
      console.log('Successfully deleted all documents with name Ryno');
    });

    db.collection('Users').findOneAndDelete({ _id: new ObjectID('595b6639c1f62f0d24d0b21c')}).then((result) => {
      console.log(result);
    });

  // db.close();
});
