const express = require('express');
const router = express.Router();

router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));

// routes.get('/', (req, res) => {
//     res.send('Anna Wheeler');
// });

// routes.get('/test', (req, res) => {
//     res.send('Jermery Wheeler');
// });
// routes.get('/test2', (req, res) => {
//     res.send('Alexandra Wheeler');
// });

// routes.get('/test3', (req, res) => {
//     res.send('Chase Wheeler');
// });

module.exports = router; 