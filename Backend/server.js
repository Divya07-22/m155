require('dotenv').config();// Import necessary packages
const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/admin'); // Import the User model
const bcrypt = require('bcryptjs');
const { body, validationResult } = require('express-validator');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const shelterRouter = require('./routes/shelterRoutes')
const bankRouter=require('./routes/bankRoutes')
const disasterRouter=require('./routes/disasterRoutes')
const cors = require('cors')
const contactRoutes = require('./routes/contactRoutes');
const reportRoutes = require('./routes/reportRoutes');
const taskRoutes = require('./routes/taskRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes');
const emergencyRoutes = require('./routes/emergencyRoutes');
const incidentRoutes = require('./routes/incidentRoutes');
const resourceRoutes = require('./routes/resourceRoutes');
const postincidentRoutes = require('./routes/postincidentRoutes');
const postresourceRoutes = require('./routes/postresourceRoutes');
connectDB();

// Load environment variables from .env file
// This loads the variables from .env file

// Create an Express app
const app = express();

app.use(cors({ origin:"*"}));

// Middleware to parse JSON bodies
app.use(express.json());

app.use('/api/auth', authRoutes)
app.use('/api/shelter', shelterRouter);
app.use('/api/bank',bankRouter);
app.use('/api/disaster',disasterRouter)
app.use('/api/contact', contactRoutes);
app.use('/api/reports', reportRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/volunteers', volunteerRoutes);
app.use('/api/emergency', emergencyRoutes);
app.use('/api/incidents', incidentRoutes);
app.use('/api/resources', resourceRoutes);
app.use('/api', postincidentRoutes);
app.use('/api/resources', resourceRoutes);

// Signup route with validation
app.post(
    '/signup',
    [
        body('email').isEmail().withMessage('Invalid email format'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters'),
    ],
    async (req, res) => {
        // Check validation errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, email, password } = req.body;

        try {
            // Check if user already exists
            const existingUser = await User.findOne({ email });
            if (existingUser) {
                return res.status(400).json({ error: 'User already exists' });
            }

            // Create new user
            const newUser = new User({
                username,
                email,
                password,
            });

            await newUser.save(); // Save the user to the database
            res.status(201).json({ message: 'Signup successful', user: newUser });
        } catch (err) {
            console.error('Error during signup:', err);
            res.status(500).json({ error: 'Signup failed' });
        }
    }
);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});