const express = require('express');
const asyncHandler = require('express-async-handler');

const { Picture } = require('../../db/models');
const router = express.Router();

// const { addAPicture } = require('../../../frontend/src/store/picture')


// CREATE ROUTES for /pictures

router.post(
    '/',
    asyncHandler(async (req, res) => {
        const { imageLink, title, description, userId } = req.body;
        const picture = await Picture.uploadPicture({ imageLink, title, description, userId });

        await setTokenCookie(res, picture);

        return res.json({
            picture,
        });
    }),
);

module.exports = router;