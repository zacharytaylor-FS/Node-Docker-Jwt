const express = require('express');
const router = express.Router();
const exec = require('child_process').exec;

/* GET history page. */
router.get('/', (req, res, next) => {
  console.log(req.query)
  const file = req.query.file

  console.log(file)

  const command = `git log --oneline ${file}`;

  exec(command, (err, output) => {
    if(err) {
      res.status(500).send(err);
      return;
    }
    res.send(output)
  })
  
});

/* GET history page */

module.exports = router;
