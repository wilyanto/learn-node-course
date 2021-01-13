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
    res.status(400).render('404', {pageTitle: 'Page Not Found'});
});

app.listen(3000);