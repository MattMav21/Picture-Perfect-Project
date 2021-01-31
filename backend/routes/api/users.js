const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Picture } = require('../../db/models');

const router = express.Router();

const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3.js');

const validateSignup = [
    check('email')
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage('Please provide a valid email.'),
    check('username')
        .exists({ checkFalsy: true })
        .isLength({ min: 4 })
        .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
        .not()
        .isEmail()
        .withMessage('Username cannot be an email.'),
    check('password')
        .exists({ checkFalsy: true })
        .isLength({ min: 6 })
        .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
];

// Signup
router.post(
    '',
    validateSignup,
    asyncHandler(async (req, res) => {
        const { email, password, username } = req.body;
        const user = await User.signup({ email, username, password });

        await setTokenCookie(res, user);

        return res.json({
            user,
        });
    }),
);

router.get(`/:userId`, asyncHandler(async (req, res) => {
    console.log("REQUEST PARAMETERS", req.params)
    const singleUserId = Number(req.params.userId);
    console.log("USER PAGE ROUTE HAS BEEN HIT!!!!")
    console.log("USER PAGE ROUTE HAS BEEN HIT!!!!")
    console.log("USER PAGE ROUTE HAS BEEN HIT!!!!")
    console.log(singleUserId)
    console.log(typeof singleUserId)
    console.log("USER PAGE ROUTE HAS BEEN HIT!!!!")
    console.log("USER PAGE ROUTE HAS BEEN HIT!!!!")
    console.log("USER PAGE ROUTE HAS BEEN HIT!!!!")


    const user = await User.findOne({where: {id: Number(singleUserId)}});
    const pictures = await Picture.findAll({where: {userId: Number(singleUserId)}});

    return res.json({
        user,
        pictures,
    });

}))

// signup w/ multer
// router.post(
//     "",
//     singleMulterUpload("image"),
//     validateSignup,
//     asyncHandler(async (req, res) => {
//         const { email, password, username } = req.body;
//         const profileImageUrl = await singlePublicFileUpload(req.file);
//         const user = await User.signup({
//             username,
//             email,
//             password,
//             profileImageUrl,
//         });

//         await setTokenCookie(res, user);

//         return res.json({
//             user,
//         });
//     })
// );

module.exports = router;