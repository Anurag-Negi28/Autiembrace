// Vmodel.js
var mongoose = require('mongoose');
var videoSchema = new mongoose.Schema({
  name: String,
  desc: String,
  video: {
    data: Buffer,
    contentType: String
  }
});

module.exports = mongoose.model('Video', videoSchema);
