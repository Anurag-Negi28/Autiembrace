const express = require("express");
const app = express();
const cors = require('cors');

const admin = require("firebase-admin");
const credentials = require("./key.json");

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

app.use(express.json());

app.use(cors());

app.use(express.urlencoded({extended: true}));

app.post('/create', async (req, res) => {
    try {
        const id = req.body.email;
        const userJson = {
            email: req.body.email,
            username: req.body.username
        };
        const response = db.collection("users").doc(id).set(userJson);
        res.send(response);
    } catch (error) {
        res.send(error);
    }
});

app.get('/read/:id', async (req, res) => {
    try {
        const userRef = db.collection("users").doc(req.params.id);
        const snapshot = await userRef.get();

        if (!snapshot.exists) {
            res.status(404).send("User not found");
            return;
        }

        const userData = snapshot.data();
        const username = userData.username; 

        res.send(username);
    } catch(error) {
        res.status(500).send(error.message);
    }
});

const db = admin.firestore();

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`)
});