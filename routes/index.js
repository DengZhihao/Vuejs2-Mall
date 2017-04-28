var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function (req, res, next) {
    res.render('login0', {title: ''});
});

/* GET main page. */
router.get('/home', function (req, res, next) {
    res.render('home1', {title: ''});
});

/* GET detail page. */
router.get('/detail', function (req, res, next) {
    res.render('detail2', {title: ''});
});

/* GET cart page. */
router.get('/cart', function (req, res, next) {
    res.render('cart3', {title: ''});
});

/* GET address page. */
router.get('/address', function (req, res, next) {
    res.render('address4', {title: ''});
});

/* GET examine page. */
router.get('/examine', function (req, res, next) {
    res.render('examine5', {title: ''});
});

/* GET pay page. */
router.get('/pay', function (req, res, next) {
    res.render('pay6', {title: ''});
});

/* GET confirm page. */
router.get('/confirm', function (req, res, next) {
    res.render('confirm7', {title: ''});
});

/* GET mine page. */
router.get('/mine', function (req, res, next) {
    res.render('mine9', {title: ''});
});
module.exports = router;
