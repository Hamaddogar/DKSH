// models/formModel.js

import mongoose from 'mongoose';
import bcrypt from "bcrypt-nodejs";

const formSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String, // Updated field name to "email"
  contactNumber: Number,
  password: String,
  country: String,
  fullName: String,
  role: String,
  settings: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserSettings',
  },
  avatar: String,
});

// bcrypt password code 
formSchema.pre('save', function (next) {
  const user = this;
  const SALT_FACTOR = 5;
  if (!user.isModified('password')) return next();
  bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
    if (err) return next(err);
    bcrypt.hash(user.password, salt, null, function (err, hash) {
      if (err) return next(err);
      user.password = hash;
      next();
    });
  });
});

formSchema.methods.verifyPassword = function (password, cb) {
  bcrypt.compare(password, this.password, function (err, isVaild) {
    if (err) return cb(err);
    cb(null, isVaild);
  });
};
const Form = mongoose.model('Form', formSchema);
export default Form;
