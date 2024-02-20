//Vmodel.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: false
  },
  video: {
    data: Buffer,
    contentType: String
  }
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
