const express = require('express');
const router = express.Router();
const exec = require('child_process').exec;
require('dotenv').config();

//! HARDCODING
// const USERNAME1 = 'example1';
// const PASS1 = 'password1';
// const PORT1 = 9999
// console.log(`Hardcoding variables: ${USERNAME1}, ${PASS1}, ${PORT1}`)

//* ENVIRONMENT VARIABLES
const USERNAME = process.env.USERNAME
const PASS = process.env.PASS
const PORT = process.env.PORT
console.log(`Env variables: ${USERNAME}, ${PASS}, ${PORT}`)

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { 
    title: process.env.FRAMEWORK, 
    envVariables: `${USERNAME},${PASS},${PORT}` 
  });
});

module.exports = router;