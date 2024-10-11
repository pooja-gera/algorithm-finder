
require('dotenv').config({ path: '../.env' });
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();
const port = process.env.PORT || 5000;

console.log("MongoDB URI:", process.env.MONGODB_URI);


const corsOptions = {
    origin: process.env.LOCAL_HOST_URI, // Assuming your frontend runs on this port
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

//app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch(error => console.error('Error connecting to MongoDB', error));

// Schema and Model for Visitor Count
const visitorSchema = new mongoose.Schema({
    count: { type: Number, default: 0 },
    id: { type: String, default: "visitorCounter" } // Unique identifier
});

const Visitor = mongoose.model('Visitor', visitorSchema);

// Get Visitor Count
app.get('/api/visitor-count', async (req, res) => {
    try {
        let visitorData = await Visitor.findOne({ id: "visitorCounter" }); // Ensure we're always querying the same document
        if (!visitorData) {
            visitorData = new Visitor({ count: 1 });
            await visitorData.save();
        }
        res.json({ count: visitorData.count });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Increment Visitor Count
app.post('/api/visitor-count', async (req, res) => {
    try {
        let visitorData = await Visitor.findOne({ id: "visitorCounter" }); // Ensure we're always querying the same document
        if (!visitorData) {
            visitorData = new Visitor({ count: 1 });
        } else {
            visitorData.count += 1;
        }
        await visitorData.save();
        res.json({ count: visitorData.count });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
