const router = require('express').Router();
// Import all from 'api' folder
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
    res.status(404).send('Route not found!');
});

module.exports = router;