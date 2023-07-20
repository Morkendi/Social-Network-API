const router = require('express').Router();
// Import all from 'api' folder
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('<h1>Error 404</h1>');
});

module.exports = router;