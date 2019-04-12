var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/dropbox', function(req, res, next) {
    res.render('dropbox.ejs');
});

module.exports = router;
