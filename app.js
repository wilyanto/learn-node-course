const path = require('path');

const express  = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false})); // parsing Request body
app.use(express.static(path.join(__dirname, 'public'))); // access static folder

app.use('/admin', adminData.routes); 
app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html')); // send file as response, e.g: 404 Page HTML file
});

app.listen(3000);