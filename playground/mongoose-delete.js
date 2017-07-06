const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({})
// Todo.remove({}).then((res) => {
//   console.log(res);
// });

// Todo.findOneAndRemove();
// Todo.findByIdAndRemove();
Todo.findOneAndRemove({ att: 'val'}).then((doc) => {
  console.log(doc);
});

Todo.findByIdAndRemove('_id').then((todo) => {
  console.log(todo);
});
