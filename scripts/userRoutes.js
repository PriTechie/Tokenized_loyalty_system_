const express = require('express');
const router = express.Router();
const User = require('../models/User');

// POST route to handle user registration
router.post('/', async (req, res) => {
    const { name, email } = req.body;

    // Basic validation
    if (!name || !email) {
        return res.status(400).json({ message: 'Name and email are required' });
    }

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json({ message: 'Email already registered' });
    }

    try {
        // Create a new user and save to the database
        const newUser = new User({
            name,
            email
        });

        await newUser.save();

        // Send success response
        res.json({ message: `User ${name} registered successfully with email ${email}.` });
    } catch (err) {
        res.status(500).json({ message: 'Server error, please try again later' });
    }
});

module.exports = router;
