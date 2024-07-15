const express = require('express');
const app = express();
const posts = require('./posts')

app.get('/posts', (req, res) => {
    res.json(posts)
})

app.get('/', (req, res) => {
    res.send('Api is running.')
})


// Start server
app.listen(process.env.PORT || 4000, () => {
    console.log("Server is running.");
});
