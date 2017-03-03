const Router = require('express').Router;
const router = new Router();

const application  = require('./modules/application/application.router');

router.route('/').get((req, res) => {
  res.json({ message: 'Welcome to product-builder-service API!' });
});

router.use('/application', application);
router.get('/docs', (req, res, next) => {
  res.sendFile('doc/index.html', { root: __dirname });
});

module.exports = router;
