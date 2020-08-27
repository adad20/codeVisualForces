const express = require('express');
const app = express();
const axios = require('axios');

const port = process.env.PORT || 5000;

app.get('/userinfo/:handle', (req, res) => {
    try {
       console.log("hello"); 
    } catch (err) {
        res.status(500).send("Server Error");
    }
});



app.listen(port, () => console.log(`Server running on port ${port} 🔥`));