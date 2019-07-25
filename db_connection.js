const mongoose = require('mongoose');
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@cluster0-pbkmp.mongodb.net/${
      process.env.MONGO_DB
    }?retryWrites=true&w=majority`,
    { useNewUrlParser: true },
  )
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err, 'Bad Request Connnection...*****************');
  });

/*var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Connection error: '));
db.once('open', function(callback) {
  //The code in this asynchronous callback block is executed after connecting to MongoDB.
  console.log('Successfully connected to MongoDB.');
});

var Schema = mongoose.Schema;

var commentSchema = new Schema({
  CommentBody: String,
  UserName: String,
  DatePosted: Date,
});

var Comment = mongoose.model('Comment', commentSchema);
var myData = new Comment({
  CommentBody: 'Hello',
  UserName: 'rahul',
  DatePosted: new Date(),
});
myData
  .save()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
Comment.find({ UserName: 'rahul' }, function(error, comments) {
  console.log('Data From Mongo DB ******************************');
  console.log(comments); //Display the comments returned by MongoDB, if any were found. Executes after the query is complete.
});*/
