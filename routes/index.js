var express = require('express');
var router = express.Router();

/* GET main page. */
router.get('/', function (req, res, next) {
    res.render('detail', {title: ''});
});

/* GET cart page. */
router.get('/cart', function (req, res, next) {
    res.render('cart', {title: ''});
});

/* GET address page. */
router.get('/address', function (req, res, next) {
    res.render('address', {title: ''});
});
module.exports = router;
