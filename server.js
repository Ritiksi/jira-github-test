const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

// UU-14: User Registration API Endpoint
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ error: "Missing fields! Please provide all details." });
    }

    console.log(`New user registered: ${username}`);
    
    res.status(201).json({
        message: "User registered successfullys!",
        user: { username, email }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});