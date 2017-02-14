var express = require('express');
var router = express.Router();

/* 主页面 */
router.get('/', function(req, res, next) {
  res.render('index', { title: '主页' });
}); 

/* 注册页面. */
router.get('/reg', function(req, res, next) {
  res.render('reg', { title: '注册' });
});

/* 注册页面. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: '登录' });
});



module.exports = router;
