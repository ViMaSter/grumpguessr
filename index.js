import express from 'express';
const app = express()

app.use(express.static('wwwroot', {
    extensions: ['html', 'css', 'js'],
}));

app.listen(8080, () => console.log('Server running on http://localhost:8080/'))