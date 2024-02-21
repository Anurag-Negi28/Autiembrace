//app.js
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var imgSchema = require('./model.js');
var fs = require('fs');
var path = require('path');
var cors = require('cors'); 
app.set("view engine", "ejs");
app.use(cors());

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

var upload = multer({ storage: storage });

app.get('/', (req, res) => {
  imgSchema.find({})
    .then(data => res.render('imagepage', { items: data }))
    .catch(err => console.error(err));
});

app.post('/', upload.single('image'), (req, res, next) => {
	var obj = {
	  name: req.body.name,
	  desc: req.body.desc,
	  img: {
		data: fs.readFileSync(path.join(__dirname, 'uploads', req.file.filename)),
		contentType: req.file.mimetype
	  }
	};
	imgSchema.create(obj)
	  .then(item => {
		console.log('Image saved to database:', item);
		res.redirect('/');
	  })
	  .catch(err => {
		console.error(err);
		res.status(500).send('An error occurred while uploading the image.');
	  });
  });
  
  app.get('/api/images/:name', (req, res) => {
	const name = req.params.name;
	imgSchema.findOne({ name: name })
	  .then(image => {
		if (!image) {
		  return res.status(404).send('Image not found');
		}
		if (image.img && image.img.data) {
		  res.setHeader('Content-Type', image.img.contentType);
		  res.setHeader('Content-Length', image.img.data.length);
		  res.send(image.img.data);
		} else {
		  console.error('Image data is missing in the document');
		  res.status(500).send('An error occurred while fetching the image.');
		}
	  })
	  .catch(err => {
		console.error(err);
		res.status(500).send('An error occurred while fetching the image.');
	  });
  });
  
var port = process.env.PORT || '3005';
app.listen(port, err => {
  if (err) throw err;
  console.log('Server listening on port', port);
});

/*import React from 'react';
import VideoFetcher from './VideoFetcher';
import ImageFetcher from './ImageFetcher';

const App = () => {
  return (
    <div>
      <h1>Video</h1>
      <VideoFetcher videoName="example-video-name" />
      <h1>Image</h1>
      <ImageFetcher imageName="example-image-name" />
    </div>
  );
};

export default App;
*/