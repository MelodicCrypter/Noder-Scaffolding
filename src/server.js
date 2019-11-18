// Library Modules
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const hpp = require('hpp');
const es6Renderer = require('express-es6-template-engine');

// Set up
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public/');

// View Template engine
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

// Middlewares
app.use(cors({ origin: false }));
app.use(helmet());
app.use(express.json({ limit: '300kb' }));
app.use(express.urlencoded());
app.use(hpp());
app.use(express.static(publicPath));

app.get('/', (req, res) => {
    res.render('index', {
        // for es6Renderer
        locals: {
            pageTitle: 'Simple Node Setup | Hugh Caluscusin',
            repoAuthor: 'Hugh Caluscusin',
            repoAuthorSite: 'https://www.melodiccrypter.com/',
            repoAuthorGitLink: 'https://github.com/MelodicCrypter',
            handle: '@MelodicCrypter',
        },
        partials: {
            header: path.resolve('views/partials/header.html'),
            footer: path.resolve('views/partials/footer.html'),
        },
    });
});

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
});
