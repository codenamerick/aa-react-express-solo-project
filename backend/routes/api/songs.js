const express = require('express');
const asyncHandler = require('express-async-handler');

// const {check} = require('express-validator');
// const {handleValidationErrors} = require('../../utils/validation');

const {requireAuth} = require('../../utils/auth');
const db = require('../../db/models');
const {User, Song, Album} = db;
const id = db.User.id;

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

// get songs route
router.get('/', asyncHandler(async (req, res) => {
    const songs = await Song.findAll({
        order: [['createdAt', 'DESC']],
    });

    return res.json({
        songs,
    })
}));

// post songs route
router.post('/', asyncHandler(async (req, res) => {
    const {userId, albumId, url, title} = req.body;
    const album = Album.findOne(id);
    const user = User.findOne(id);

    const newSong = await Song.create({
        userId,
        albumId,
        url,
        title,
        album,
        user
    });

    return res.json({
        newSong
    });
}));

// get song
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const song = await Song.findByPk(req.params.id, {
        include: {
            model: Album
        }
    });

    return res.json({
        song
    });
}));

// edit song
router.put('/:id(\\d+)', asyncHandler(async (req, res) => {
    // const id = await Song.update(req.body);
    // const song = await Song.one(id);
    // const {title, url} = req.body
    // console.log('req-body-------------: ', title, url);
    console.log(req.body);
    // // return res.json(song);
    // const song = await Song.findByPk(req.params.id);
    // console.log('this is song: ', song);

    // const updatedSong = await Song.update({
    //     title,
    //     url
    // });

    // console.log('----------- this is updated song -----', updatedSong);

    // const id = await Song.update(req.body);

    // console.log(id);
}));

// delete song
router.delete('/:id(\\d+)', asyncHandler(async (req, res) => {
    const songId = req.params.id;
    const removedSong = await Song.findByPk(songId);
    console.log('----------- deleted -------------', removedSong);

    if (removedSong) {
        await removedSong.destroy();
        res.json({message: 'Success'});
    } else {
        res.json({message: 'Failure'});
    }

}));



module.exports = router;
