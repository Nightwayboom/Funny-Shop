const router = require("express").Router();
const auth = require('./api/auth.api.routes');
const tokens = require('./api/tokens.api.routes');
const users = require('./api/users.api.routes');
const cards = require('./api/cards.api.routes');
const baskets = require('./api/baskets.api.routes');

router.use('/auth', auth);
router.use('/token', tokens);
router.use('/users', users);
router.use('/cards', cards);
router.use('/baskets', baskets);

module.exports = router;