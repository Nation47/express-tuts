const express = require('express');
const app = express();

app.set('view engine', 'ejs');


app.listen(3000);

app.use(express.static('public'));


app.get('/', (req, res) => {
    const blogs = [
        {title: 'New technology in 2021', snippet: 'new advanced technology'},
        {title: 'New technology in 2022', snippet: 'new advanced technology'},
        {title: 'New technology in 2023', snippet: 'new advanced technology'}
    ];
    res.render('index', {title: 'Home', blogs});
});

app.get('/about', (req, res) => {
    res.render('about', {title: 'About'});
});

app.get('/create', (req, res) => {
    res.render('create', {title: 'Create'})
})
app.use((req, res) => {
    res.status(404).render('404', {title: '404'});
});