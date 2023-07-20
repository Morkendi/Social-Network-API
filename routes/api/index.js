const router = require('express').Router();
// Require routes
const userRoutes = require('./userRoutes');
const thoughtRoutes = require('./thoughtRoutes');

// Setup endpoints
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;