const express = require('express');

const app = express();
app.listen(3000, () => console.log('Server started'));
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => res.render('home'))

// INSERT INTO public."HotGirl"(name, image, "like", dislike)
// 	VALUES ('Mai Phuong Thuy', '1.jpg', 1, 3),
//     ('Elly Tran', '2.jpg', 1, 3),
//     ('Ngoc Trinh', '3.jpg', 2, 3),
//     ('Chipu', '4.jpg', 4, 3),
//     ('Midu', '5.jpg', 12, 3)