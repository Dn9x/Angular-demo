var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsersSchema = new Schema({
  name: { type: String },
  head: { type: String},
  mono: { type: String},
  desc: { type: String},
  join: { type: String },
  create_at: { type: Date, default: Date.now }
});

mongoose.model('users', UsersSchema);
