const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [
  {  _id: new ObjectID(),
    text: 'First test todo'
   },
  {
    _id: new ObjectID(),
    text: 'Second test todo'
  }
];

beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe('POST /todos', () => {
  it('should create a new todo', (done) => {
    var text = 'Test todo text';

    request(app)
      .post('/todos')
      .send({ text })
      .expect(200)
      .expect((res) => {
        expect(res.body.text).toBe(text);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find({ text }).then((todos) => {
          expect(todos.length).toBe(1);
          expect(todos[0].text).toBe(text);
          done();
        }).catch((e) => done(e));
      });
  });

  it('should not create a todo with invalid body data', (done) => {
    request(app)
      .post('/todos')
      .send({})
      .expect(400)
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.find().then((todos) => {
          expect(todos.length).toBe(2);
          done();
        }).catch((e) => done(e));
      });
  });
});

describe('GET /todos', () => {
  it('Should het all todos', (done) => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect((res) => {
        expect(res.body.todos.length).toBe(2);
      }).end(done);
  });
});

describe('GET /todos/:id', () => {
  it('should return 404 if id is not valid ObjectID', (done) => {
    request(app)
      .get('/todos/' + 123)
      .expect(404)
      .end(done);
  });

  it('Should return 404 if there is no record for the ObjectID given', (done) => {
    request(app)
      .get('/todos/' + new ObjectID().toHexString())
      .expect(404)
      .end(done);
  });

  it('Should return the object when using a valid id for that object', (done) => {
    var firstTodo = todos[0];

    request(app)
      .get('/todos/' + firstTodo._id.toHexString())
      .expect(200)
      .expect((res) => {
        expect(res.body.todo.text).toBe(firstTodo.text);
      })
      .end(done);
  });
});

describe('DELETE /todos/:id', () => {
  it('should remove a todo', (done) => {
    var hexId = todos[1]._id.toHexString();

    request(app)
      .delete(`/todos/${hexId}`)
      .expect(200)
      .expect((res) => {
        expect(res.body.todo._id).toBe(hexId);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }

        Todo.findById(hexId).then((doc) => {
          expect(doc).toNotExist();
          done();
        }).catch((e) => done(e));
      });
  });

  it('should return 404 if todo was not found', (done) => {
    request(app)
      .delete('/todos/' + 123)
      .expect(404)
      .end(done);
  });

  it('should return 404 if id is not a valid object Id', (done) => {
    request(app)
      .delete('/todos/' + new ObjectID().toHexString())
      .expect(404)
      .end(done);
  });
});
