#### Technology Used:
- Node
- Express
- HPP
- CORS
- HELMET
- ES6Renderer
- Babel
- Node-Sass
- Nodemon

<br>

A very lightweight and basic node application (*scaffolding*) equipped with Babel for Node. WebPack is not included in this setup because the Babel part in this minimal setup focuses
only on the backend. You can always add WebPack anytime you want if you want to transpile both backend and frontend and bundle everything at the same time. You can check
my Robust Node Scaffolding git repo [here](https://github.com/MelodicCrypter/Robust-Node-Scaffolding) for a more sophisticated setup.

<br>

#### Development
1. After editing the app.scss (*inside public/scss/app.scss*) file for your style (*Note: if you don't want to use scss, edit directly app.css inside public/css/app.css*). 
If you continue using scss, then just run `yarn build:css` command to compile your sass file to a css file.

2. To test locally just run `yarn dev:start`

#### Views
For the views, [ES6Renderer](https://www.npmjs.com/package/express-es6-template-engine) is used. A really great node package for rendering dynamic stuff to your frontend by just using Javascript's template string feature.
