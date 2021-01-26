const express = require('express');
const asyncHandler = require('express-async-handler');

const { Picture } = require('../../db/models');
const router = express.Router();
const { singleMulterUpload, singlePublicFileUpload } = require('../../awsS3');

// const { addAPicture } = require('../../../frontend/src/store/picture')


// CREATE ROUTES for /pictures

router.post(
    '/',
    // Taking a file uploaded, 
    // adding it to request as seperate key of file
    singleMulterUpload("image"),
    asyncHandler(async (req, res) => {
        const { title, imageLink, description, userId } = req.body;
        // TODO: upload request.file to aws
        // const imageLink = await singlePublicFileUpload(req.file);
        const picture = await Picture.create({ 
            imageLink,
            title, 
            description, 
            userId 
        });


        return res.json({
            picture,
        });
    }),
);

module.exports = router;