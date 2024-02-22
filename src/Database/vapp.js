//vapp.js
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var videoSchema = require('./Vmodel.js'); 
var fs = require('fs');
var path = require('path');
app.set("view engine", "ejs");

mongoose.connect('mongodb+srv://Cyphers:Autiembrace@cluster0.vdsgquy.mongodb.net/Autiembrace?retryWrites=true&w=majority')
  .then(() => console.log("DB Connected"))
  .catch(err => console.error('Connection error', err));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var multer = require('multer');

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

var upload = multer({  
  storage: storage,
  limits: { fileSize:  100000000 }
});

app.get('/', (req, res) => {
  videoSchema.find({})
    .then(data => res.render('videoPage', { items: data }))
    .catch(err => console.error(err));
});

app.post('/', upload.single('video'), (req, res, next) => {
  var obj = {
    name: req.body.name,
    desc: req.body.desc,
    video: {
      data: fs.readFileSync(path.join(__dirname, 'uploads', req.file.filename)),
      contentType: req.file.mimetype
    }
  };
  videoSchema.create(obj)
    .then(item => {
      console.log('Video saved to database:', item);
      res.redirect('/');
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while uploading the video.');
    });
});
app.get('/api/videos/:name', (req, res) => {
  const name = req.params.name;
  videoSchema.findOne({ name: name })
    .then(video => {
      if (!video) {
        return res.status(404).send('Video not found');
      }
      if (video.video && video.video.data) {
        res.setHeader('Content-Type', video.video.contentType);
        res.setHeader('Content-Length', video.video.data.length);
        res.send(video.video.data);
      } else {
        console.error('Video data is missing in the document');
        res.status(500).send('An error occurred while fetching the video.');
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('An error occurred while fetching the video.');
    });
});


var port = process.env.PORT || '3007';
app.listen(port, err => {
  if (err) throw err;
  console.log('Server listening on port', port);
});
