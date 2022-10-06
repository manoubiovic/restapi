const mongoose = require('mongoose');


let userSchema = new mongoose.Schema
({
  
  user_name: {type:String, default:"noname"},
  age: Number,
  user_email: {type:String, required:true},
  user_password: {type:String, required:true},
  
})
const user = mongoose.model('user', userSchema);

module.exports = user