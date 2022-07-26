const router = require('express').router();
const apiRoutes = require('./api/index');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.status(404).send('404 Error!');
});

module.exports = router;