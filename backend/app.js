// import standard packages for core backend functionality

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csrf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

// check env below

const {environment} = require('./config');
const isProduction = environment === 'production';

// initialize express app below

const app = express();

// connect morgan middleware below for logging information about requests and responses

app.use(morgan('dev'));

// adding cookie parser and express.json for parsing cookies and json req. bodies

app.use(cookieParser());
app.use(express.json());

// middlewares used for security below

if (!isProduction) {
    app.use(cors());
}

app.use(helmet({
    contentSecurityPolicy: false
}));

app.use(csrf({
    cookie: {
        secure: isProduction,
        sameSite: isProduction && 'Lax',
        httpOnly: true,
    },
}));

// bring in routers from /routes

app.use(routes);








module.exports = app;
