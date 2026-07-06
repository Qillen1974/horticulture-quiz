const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4710;

app.use(express.static(__dirname, { index: 'index.html' }));

app.listen(PORT, () => console.log(`horticulture-quiz listening on ${PORT}`));
