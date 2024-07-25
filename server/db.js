const mongoose = require('mongoose');

const uri = "mongodb+srv://shamilkv28:ACTeTHDdfZOJEaY8@cluster0.qtiyv7h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Mongoose connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000,
  connectTimeoutMS: 10000
};

// Connect to MongoDB
mongoose.connect(uri, options).then(() => {
  console.log("Connected to MongoDB!");
}).catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});

// Model creation for collections
const User = mongoose.model('User', {
  name: String,
  gender: String,
  phoneNo: Number,
  username: String,
  password: String
});

const Content = mongoose.model('Content', {
  placename: String,
  imageUrl: String,
  details: String,
  field: String
});

module.exports = { User, Content };