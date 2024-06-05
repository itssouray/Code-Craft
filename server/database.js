const mongoose = require("mongoose");

const mongoUrl = "mongodb://127.0.0.1:27017/Subjects";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

mongoose.connect(mongoUrl,options)
  .then(()=>{
    console.log("Connected to MongoDB successfully!");
  })
  .catch((err)=>{
    console.log("Error connecting to MongoDB: ",err);
  })

  module.exports = mongoose;