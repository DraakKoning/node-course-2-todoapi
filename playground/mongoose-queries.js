const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '595bb67ba07040180ceed603';
// var invalidId = '595bb67ba07040180ceed60311';
//
// if (!ObjectID.isValid(invalidId)) {
//   console.log('Id not valid');
// }
// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos:', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo:', todo);
// });

// Todo.findById(invalidId).then((todo) => {
//   if (!todo) {
//     return console.log('Id not found');
//   }
//   console.log('Todo By Id:', todo);
// }).catch((e) => console.log(e));

var userid = '595bbd28f928f0520fc3d9a0';

if (!ObjectID.isValid(userid)) {
  console.log('Id for user is not valid');
}

User.findById(userid).then((user) => {
  if (!user) {
    return console.log('User not found');
  }

  console.log('User:', user);
}).catch((e) => console.log(e));
