const express = require('express');
const router = express.Router();
require('dotenv').config('../env');
/* GET users listing. */
router.get('/', (req, res, next) =>{
  const name = req.query.name;
  const age = req.query.age;
  res.send(`Hello ${name}, your are ${age} years old!`);
});

module.exports = router;
//http://127.0.0.1:9999/users?age=31&name=zac