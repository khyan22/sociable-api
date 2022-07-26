const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');

const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    }, 
    email: {
      type: String,
      require: true,
      unique: true,
      validate: [ isEmail, 'Email not valid!' ]
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

UserSchema.virtual('friendCount').get(function() {
  return this.friends.length
});

const User = model('User', UserSchema);

module.exports = User;