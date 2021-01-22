const router = require('express').Router(); //1
const asyncHandler = require('express-async-handler'); //2
const { setTokenCookie } = require('../../utils/auth.js'); //2
const { User } = require('../../db/models'); //2
const { restoreUser } = require('../../utils/auth.js'); //3
const { requireAuth } = require('../../utils/auth.js'); //4

//1
router.post('/test', function (req, res) {
    res.json({ requestBody: req.body });
});

//2 GET /api/set-token-cookie
router.get('/set-token-cookie', asyncHandler(async (req, res) => {
    const user = await User.findOne({
        where: {
            username: 'Demo-lition'
        },
    })
    setTokenCookie(res, user);
    return res.json({ user });
}));

//3 GET /api/restore-user
router.get(
    '/restore-user',
    restoreUser,
    (req, res) => {
        return res.json(req.user);
    }
);

//4 GET /api/require-auth
router.get(
    '/require-auth',
    requireAuth,
    (req, res) => {
        return res.json(req.user);
    }
);

module.exports = router;