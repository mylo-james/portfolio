const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.resolve('../frontend/build')));

app.get('*', (req, res) => {
    path.resolve(__dirname, '../frontend', 'build', 'index.html');
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}!`);
});