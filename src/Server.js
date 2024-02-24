const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { connect: connectDB } = require('./db'); 
const { connect: connectDBNorm } = require('./dbNorm'); 
const dbRoutes = require('./quoteRoute'); 
const dbRoutesNorm = require('./normRoute'); 
const imgSchema = require('./Database/model.js'); 
const videoSchema = require('./Database/Vmodel.js'); 

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  }
});

const upload = multer({ storage: storage });

// Database connections
mongoose.connect('mongodb+srv://Cyphers:Autiembrace@cluster0.vdsgquy.mongodb.net/Autiembrace?retryWrites=true&w=majority')
  .then(() => console.log("DB Connected"))
  .catch(err => console.error('Connection error', err));

connectDB().then(() => console.log("Quote DB Connected"));
connectDBNorm().then(() => console.log("Norm DB Connected"));

// Routes
app.use('/', dbRoutes); // Quote routes
app.use('/', dbRoutesNorm); // Norm routes

// Image handling routes
app.get('/images', (req, res) => {
  imgSchema.find({})
    .then(data => res.render('imagepage', { items: data }))
    .catch(err => console.error(err));
});

app.post('/images', upload.single('image'), (req, res, next) => {
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
      res.redirect('/images');
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

// Video handling routes
app.get('/videos', (req, res) => {
  videoSchema.find({})
    .then(data => res.render('videoPage', { items: data }))
    .catch(err => console.error(err));
});

app.post('/videos', upload.single('video'), (req, res, next) => {
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
      res.redirect('/videos');
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

// Start the server
const PORT = process.env.PORT ||  8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));