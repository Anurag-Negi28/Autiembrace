const express = require("express");
const app = express();
const cors = require('cors');
const admin = require("firebase-admin");
const credentials = require("./serviceAccountKey.json");
const dbRoutes = require('./quoteRoute');
const { connect } = require('./db');

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//signup and login
app.post('/signup', async (req, res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    };
    try {
        const userRecord = await admin.auth().createUser({
            email: user.email,
            password: user.password,
            emailVerified: false,
            disabled: false
        });
        res.json(userRecord);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const userRecord = await admin.auth().getUserByEmail(email);
        if (!userRecord) {
            return res.status(400).json({ error: "User not found" });
        }
        res.json({ message: "Login successful", user: userRecord });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Db 
connect().then(() => {
    app.use('/', dbRoutes);

    const PORT = process.env.PORT ||  3002;
    app.listen(PORT, () => {
        console.log(`Server is running on PORT ${PORT}`);
    });
}).catch((error) => {
    console.error('Error connecting to database:', error);
});
