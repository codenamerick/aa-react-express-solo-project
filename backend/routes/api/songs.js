const express = require('express');
const asyncHandler = require('express-async-handler');

const {check} = require('express-validator');
const {handleValidationErrors} = require('../../utils/validation');

const {requireAuth} = require('../../utils/auth');
const db = require('../../db/models');
const {User, Song, Album} = db;
const id = db.User.id;

const router = express.Router();


const validateSong = [
    check('title')
        .exists({checkFalsy: true})
        .not()
        // .isEmpty()
        .withMessage('Please provide a title for your song.'),
    check('imageUrl')
        // .exists({checkFalsy: true})
        // .isURL()
        .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/)
        .withMessage('Please provide an image url that ends with jpg, gif, or png.'),
    check('songUrl')
        // .exists({checkFalsy: true})
        // .isURL()
        .matches(/(http(s?):)([/|.|\w|\s|-])*\.(?:mp3|m4a|wav)/)
        .withMessage('Please provide a song url that ends with mp3, m4a, or wav.'),
    handleValidationErrors,
];

// get all songs route
router.get('/', asyncHandler(async (req, res) => {
    const songs = await Song.findAll({
        order: [['createdAt', 'DESC']],
        include: [{
            model: User,
            include: [{model: Album}]
        }]
    });

    return res.json({
        songs,
    })
}));

// create song route
router.post('/', requireAuth, validateSong, asyncHandler(async (req, res) => {
    const {userId, albumId, imageUrl, songUrl, title} = req.body;
    const album = Album.findOne(id);
    const user = User.findOne(id);

    const newSong = await Song.create({
        userId,
        albumId,
        imageUrl,
        songUrl,
        title,
        album,
        user
    });

    return res.json({
        newSong
    });
}));

// get individual song
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const song = await Song.findByPk(req.params.id, {
        include: [{
            model: User,
            include: [{model: Album}]
        }]
    });

    return res.json({
        song
    });
}));

// edit song
router.put('/:id(\\d+)', requireAuth, validateSong, asyncHandler(async (req, res) => {
    const song = req.body;
    const updatedSong = await Song.findByPk(req.params.id, {
        include: [{
            model: User,
            include: [{model: Album}]
        }]
    });

    if (song) {
        updatedSong.imageUrl = song.imageUrl;
        updatedSong.songUrl = song.songUrl;
        updatedSong.title = song.title;

        await updatedSong.save();

        return res.json({
            updatedSong,
            message: 'Success'
        });
    } else {
        res.json({message: 'Failure'});
    }
}));

// delete song
router.delete('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const songId = req.params.id;
    const removedSong = await Song.findByPk(songId);

    if (removedSong) {
        await removedSong.destroy();
        res.status(204).end()
    } else {
        res.json({message: 'Failure'});
    }

}));



module.exports = router;
