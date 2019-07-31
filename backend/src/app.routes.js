const express = require('express');
const router = express.Router();
const moment = require('moment-timezone');

//Controller routes
const shrubRoutes = require('./controller/shrub.controller');
const herbRoutes = require('./controller/herb.controller');
const treeRoutes = require('./controller/tree.controller');


//middleware
router.use(function timeLog (req, res, next) {
    console.log('Time: '+  moment().tz('Australia/Melbourne').format('MMMM Do YYYY, h:mm:ss a') + ' user-agent' + req.headers["user-agent"] + ' URL: ' + req.url);
    next()
});

router.use('/api/shrub', shrubRoutes);
router.use('/api/herb', herbRoutes);
router.use('/api/tree', treeRoutes);

module.exports = router;
