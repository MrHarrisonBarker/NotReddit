const express = require('express');
//const userRoutes = require('./user.route');
const postRoutes = require('./post.route');
//const domainRoutes = require('./domain.route');

const router = express.Router(); // eslint-disable-line new-cap

/** GET /health-check - Check service health */
// app.get('/health-check', (req, res) =>
//     res.send('OK')
// );

router.use('/posts', postRoutes);
//app.use('/user', userRoutes);
//app.use('/domains', domainRoutes);

module.exports = router;
