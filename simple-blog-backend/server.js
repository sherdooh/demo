const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// API endpoint to fetch all blog posts
app.get('/api/blogposts', (req, res) => {
    fs.readFile(path.join(__dirname, 'blogposts.json'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        console.log('Content of blogposts.json:', data); // Log content of the file
        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (parseError) {
            console.error('Error parsing JSON:', parseError);
            res.status(500).json({ error: 'Error parsing JSON' });
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
