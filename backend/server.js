const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;
const NODE_ENV = process.env.NODE_ENV;

app.post('/login', (req, res) => {

    const { username } = req.body;

    res.json({
        message: `Welcome ${username}`,
        environment: NODE_ENV
    });
});

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
