// import standard packages for core backend functionality

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const csrf = require('csurf');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const {ValidationError} = require('sequelize');

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

// error handlers below

app.use((_req, _res, next) => {
    const err = new Error('The requested resource could not be found.');

    err.title = 'Resource Not Found';
    err.errors = ['The requested resource could not be found.'];
    err.status = 404;
    next(err);
});

// for sequelize errors

app.use((err, _req, _res, next) => {
    if (err instanceof ValidationError) {
        err.errors = err.errors.map((e) => {
            return e.message;
        });

        err.title = 'Validation Error';
    }

    next(err);
});

app.use((err, _req, res, _next) => {
    res.status(err.status || 500);
    console.error(err);
    res.json({
        title: err.title || 'Server Error',
        message: err.message,
        errors: err.errors,
        stack: isProduction ? null : err.stack,
    });
});








module.exports = app;
