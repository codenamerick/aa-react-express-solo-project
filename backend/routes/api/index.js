const router = require('express').Router();
// const asyncHandler = require('express-async-handler');
// const {User} = require('../../db/models');
// const { setTokenCookie, restoreUser, requireAuth } = require('../../utils/auth');
const sessionRouter = require('./session');
const usersRouter = require('./users');
const songsRouter = require('./songs');
const albumsRouter = require('./albums');

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/songs', songsRouter);
router.use('/albums', albumsRouter);

// router.post('/test', function(req, res) {
//     res.json({requestBody: req.body});
// });

// test user auth by testing the setTokenCookie function
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'Demo-user'
//         },
//     });

//     setTokenCookie(res, user);
//     return res.json({user});
// }));

// test restore user by connecting middleware and checking req.user key
// router.get('/restore-user', restoreUser, (req, res) => {
//     return res.json(req.user);
// });

// test requireAuth below
// router.get('/require-auth', requireAuth, (req, res) => {
//     return res.json(req.user);
// });

// for testing this route on initial set up below

/*

you can test this in browser console

fetch('/api/test', {
    method: "POST",
    headers: {
        "Content-Type":"application/json",
        "XSRF-TOKEN": `tICzumsT-u87FRzUS5JiDtqIe5HEF8NDiA5o`
    },
    body: JSON.stringify({hello: 'world'})
}).then(res => res.json()).then(data => console.log(data));

*/

module.exports = router;
