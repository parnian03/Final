const express = require('express');
const Schema  = new mongoose.Schema({
  username :{
      type  : String,
      required : true,
      required : true
  } ,
  email :{
    type  : String,
    required : true
} ,
password :{
    type  : String,
    required : true,
    minlength : 6
} ,
date :{
    type : Date,
    default : Date.now
}
});

const User= model('User',UserSchema);

module.exports = User;