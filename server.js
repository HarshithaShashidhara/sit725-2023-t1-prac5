
const express = require("express");
const cardRouter = require("./routers/cardRouter");
const { connectToMongoDB } = require("./database");

const app = express();
const PORT = process.env.PORT || 3003;

// Connect to MongoDB
connectToMongoDB();

// Middleware
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/cards', cardRouter);
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
