const express = require('express');
const asyncHandler = require('express-async-handler');

const {check} = require('express-validator');
const {handleValidationErrors} = require('../../utils/validation');

const {setTokenCookie, requireAuth} = require('../../utils/auth');
const {User} = require('../../db/models');

const router = express.Router();


const validateSignup = [
    check('email')
        .exists({checkFalsy: true})
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({checkFalsy: true})
        .isLength({min: 4})
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('password')
        .exists({checkFalsy: true})
        .isLength({min: 6})
        .withMessage('Password must be 6 characters or more.'),
    check('profileImageUrl')
        .exists({checkFalsy: true})
        .isURL()
        .withMessage('Please provide a profile image url.'),
    check('bio')
        .exists({checkFalsy: true})
        .isLength({min: 4})
        .withMessage('Please provide a short bio with at least 4 characters.'),
    handleValidationErrors,
];

// get all users
router.get('/', asyncHandler(async (req, res) => {
    const users = await User.findAll();

    return res.json({
        users,
    })
}));

// sign-up router below
router.post('/', validateSignup, asyncHandler(async (req, res) => {
    const {email, password, username, profileImageUrl, bio} = req.body;
    const user = await User.signup({email, password, username, profileImageUrl, bio});

    await setTokenCookie(res, user);

    return res.json({
        user,
    });
}));




module.exports = router;
