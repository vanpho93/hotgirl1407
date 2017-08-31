const express = require('express');
const HotGirl = require('./HotGirl');
const app = express();
app.listen(3000, () => console.log('Server started'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

// app.get('/', (req, res) => res.render('home'));

app.get('/hotgirl/:id', (req, res) => {
    const { id } = req.params;
    HotGirl.getGirlById(id)
    .then(girl => res.render('home', { girl }))
    .catch(err => res.send(err.message));
});

app.get('/like/:id', (req, res) => {
    const { id } = req.params;
    HotGirl.incrLikeById(id)
    .then(() => res.redirect('/hotgirl/' + id))
    .catch(err => res.send(err.message));
});

app.get('/xlike/:id', (req, res) => {
    const { id } = req.params;
    HotGirl.incrLikeById(id)
    .then(like => res.send(like + ''))
    .catch(err => res.send(err.message));
});