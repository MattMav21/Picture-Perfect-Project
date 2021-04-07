const router = require('express').Router(); //1
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const picturesRouter = require('./pictures.js');
const asyncHandler = require('express-async-handler');
const { Picture } = require('../../db/models');


//My Routers

router.get('/', asyncHandler(async (req, res) => {
    const pictures = await Picture.findAll();
        
    return res.json({
        pictures,
    });
}))

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/pictures', picturesRouter);

//1
router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

module.exports = router;

//THE BELOW WAS FOR TESTING THE MIDDLEWARE
// const asyncHandler = require('express-async-handler'); //2
// const { setTokenCookie } = require('../../utils/auth.js'); //2
// const { User } = require('../../db/models'); //2
// const { restoreUser } = require('../../utils/auth.js'); //3
// const { requireAuth } = require('../../utils/auth.js'); //4


// //2 GET /api/set-token-cookie
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'Demo-lition'
//         },
//     })
//     setTokenCookie(res, user);
//     return res.json({ user });
// }));

// //3 GET /api/restore-user
// router.get(
//     '/restore-user',
//     restoreUser,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );

// //4 GET /api/require-auth
// router.get(
//     '/require-auth',
//     requireAuth,
//     (req, res) => {
//         return res.json(req.user);
//     }
// );