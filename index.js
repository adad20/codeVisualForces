const express = require('express');
const app = express();
const axios = require('axios');

const port = process.env.PORT || 5000;


// User details API (single user)

app.get('/api/userinfo/:handle', async (req, res) => {
    try {
       const userHandle = req.params.handle;
       let profileData = await axios.get(`https://codeforces.com/api/user.info?handles=${userHandle}`);
       res.send({profiledata: profileData.data.result});
    } catch (err) {
        res.status(500).send("Server Error");
    }
});



app.listen(port, () => console.log(`Server running on port ${port} 🔥`));