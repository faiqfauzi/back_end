const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const path = require('path');
const fs = require('fs');
const multer = require("multer");
const soalRouter = require('./router/quiz')
const categoryRouter = require('./router/category')
const jobsheetRouter = require('./router/jobsheet')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require('./models');
const quiz = require('./models/quiz');
db.sequelize.sync()

app.get('/', ( req, res) => {
    res.send('hello world')
})
app.use('/api/images', express.static('uploads'));
app.use('/api/soal', soalRouter)
app.use('/api/jobsheet', jobsheetRouter)

app.listen(port, () => console.log(`App listening on port http://localhost:${port}!`))