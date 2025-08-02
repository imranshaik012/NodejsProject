const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/UserRoutes');

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 10000 // 10 seconds timeout
})
    .then(()=> console.log('mongodb connected'))
    .catch(err => console.error('MongoDB connection error: ', err))

app.get('/', (req, res)=>res.send('API is running'))
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', ()=> console.log(`Server is running on port ${PORT}`));
module.exports = app; // Export the app for testing purposes