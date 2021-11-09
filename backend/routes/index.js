const express = require('express');
const router = express.Router();
const apiRouter = require('./api');

// connect api router below

router.use('/api', apiRouter);

// static routes
// serve react build files in production
if (process.env.NODE_ENV === 'production') {
    const path = require('path');

    router.get('/', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });

    router.use(express.static(path.resolve('../frontend/build')));

    router.get(/^(?!\/?api).*/, (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        res.sendFile(
            path.resolve(__dirname, '../../frontend', 'build', 'index.html')
        );
    });
}

if (process.env.NODE_ENV !== 'production') {
    router.get('/api/csrf/restore', (req, res) => {
        res.cookie('XSRF-TOKEN', req.csrfToken());
        res.status(201).json({});
    });
}

// router.get('/hello/world', function(req, res) {
//     res.cookie('XSRF-TOKEN', req.csrfToken());
//     res.send('Hello World!');
// });




module.exports = router;
