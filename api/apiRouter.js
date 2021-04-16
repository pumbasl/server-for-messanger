const Router = require('express');
const router = new Router();
const controller = require('./apiController');

router.post('/getmessages', controller.getMessages);
router.post('/addmessage', controller.addMessage);

module.exports = router;