var router = require('express').Router();

/* GET home page. */
router.get('/stats', function(req, res) {
  res.render('stats');
});

module.exports = router;
