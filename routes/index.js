var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function (req, res, next) {
    res.render('login0', {title: ''});
}).post(function(req,res){
    var User = global.dbHandel.getModel('user');
    var uphone = req.body.phone;
    User.findOne({mobilephone:uphone},function(err,doc){
        if(err){
            res.send(500);
            console.log(err);
        }else if(!doc){
            req.session.error = 'The phone number does not exist.';
            res.send(404);
        }else{
            if(req.body.pwd != doc.password){
                req.session.error = "Password error.";
                res.send(404);
            }else{
                req.session.user = doc;
                res.send(200);
            }
        }
    });
});

/* POST register message. */
router.route("/register").post(function(req,res){
    var User = global.dbHandel.getModel('user');
    var uphone=req.body.uphone;
    var upwd = req.body.upwd;
    var usex = req.body.usex;
    var uname = req.body.uname;
    User.findOne({mobilephone:uphone},function(err,doc){
        if(err){
            res.send(500);
            req.session.error =  'System error.';
            console.log(err);
        }else if(doc){
            req.session.error = 'The phone number already exists.';
            res.send(500);
        }else{
            User.create({
                mobilephone:uphone,
                password: upwd,
                name: uname,
                sex:usex
            },function(err,doc){
                if (err) {
                    res.send(500);
                    console.log(err);
                } else {
                    req.session.error = 'Create success.';
                    res.send(200);
                }
            });
        }
    });
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

/* GET logout page. */
router.get("/logout",function(req,res){
    req.session.user = null;
    req.session.error = null;
    res.redirect("/");
});

module.exports = router;
