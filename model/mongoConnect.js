
//Import the mongoose module
const mongoose = require('mongoose');
 
//Set up default mongoose connection
const mongoDB = process.env.NODE_ENV==='staging'? process.env.DB_HOST_STAGING : process.env.DB_HOST_DEV;
mongoose.connect(mongoDB, { useNewUrlParser: true ,useCreateIndex:true },function(error) {
    if(error){ console.error(error)}
    console.log('Mongoose Connected')
  });
 
mongoose.Promise = global.Promise;
//Get the default connection
const db = mongoose.connection;
//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


 