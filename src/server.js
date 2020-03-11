// Library Modules
import express from 'express';
import path from 'path';
import helmet from 'helmet';
import cors from 'cors';
import hpp from 'hpp';
import compression from 'compression';
import es6Renderer from 'express-es6-template-engine';

// Util
import shouldCompress from "./util/shouldCompress";

// Set up
const app = express();
const port = process.env.PORT || 3000;
const publicPath = path.join(__dirname, '../public/');

// View Template engine
app.engine('html', es6Renderer);
app.set('views', __dirname+'/views');
app.set('view engine', 'html');

// Middlewares
// Consider CSP and SRI for more security features
app.use(cors({ origin: false }));
app.use(helmet());
app.use(compression({ filter: shouldCompress, threshold: 0 }));
app.use(express.json({ limit: '300kb' }));
app.use(express.urlencoded({ extended: true }));
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
            header: path.resolve('src/views/partials/header.html'),
            footer: path.resolve('src/views/partials/footer.html'),
        },
    });
});

app.listen(port, () => {
    console.log(`🚀 App is listening on port ${port}`)
});
