// Library Modules
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const hpp = require('hpp');
const es6Renderer = require('express-es6-template-engine');

// Set up
const app = express();
const port = process.env.PORT;
const publicPath = path.join(__dirname, './public/');

// View Template engine
app.engine('html', es6Renderer);
app.set('views', 'views');
app.set('view engine', 'html');

// Mi
