const express = require('express');
const path = require('path');
const app = express();
const PORT = 4000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});

