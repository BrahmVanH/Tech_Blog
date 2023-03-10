const router = require('express').Router();
const blogRoutes = require('./blog-routes');
const userRoutes = require('./user-routes');

router.use('./blogs', blogRoutes);
router.use('./user', userRoutes);

module.exports = router;

