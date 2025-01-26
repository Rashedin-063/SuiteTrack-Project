import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema({
  displayName: {
    required: true,
    type: String,
  },
  email: {
    required: true,
    type: String,
  },
  hashedPassword: {
    required: true,
    type: String,
  },
  photoURL: {
    required: true,
    type: String,
  },
  subscription: {
    required: true,
    type: String,
  },
  role: {
    required: true,
    type: String,
  },
  status: {
    required: true,
    type: String,
  },

});


export const User = mongoose.models.User ?? mongoose.model('User', userSchema);

// export const User = mongoose.models.User ?? mongoose.model('User', userSchema);
