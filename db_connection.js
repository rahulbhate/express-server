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

