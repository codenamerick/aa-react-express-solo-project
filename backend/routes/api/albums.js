const express = require('express');
const asyncHandler = require('express-async-handler');

// const {check} = require('express-validator');
// const {handleValidationErrors} = require('../../utils/validation');

// const {setTokenCookie, requireAuth} = require('../../utils/auth');
const db = require('../../db/models');
const {User, Song, Album} = db;

const router = express.Router();


// const validateSignup = [
//     check('email')
//         .exists({checkFalsy: true})
//         .isEmail()
//         .withMessage('Please provide a valid email.'),
//     check('username')
//         .exists({checkFalsy: true})
//         .isLength({min: 4})
//         .withMessage('Please provide a username with at least 4 characters.'),
//     check('username')
//         .not()
//         .isEmail()
//         .withMessage('Username cannot be an email.'),
//     check('password')
//         .exists({checkFalsy: true})
//         .isLength({min: 6})
//         .withMessage('Password must be 6 characters or more.'),
//     handleValidationErrors,
// ];

// get albums route
router.get('/', asyncHandler(async (req, res) => {
    const albums = await Album.findAll({
        order: [['createdAt', 'DESC']],
    });

    return res.json({
        albums,
    })
}));




module.exports = router;
