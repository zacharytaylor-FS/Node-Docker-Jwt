var express = require('express');
var router = express.Router();
const crypto = require('crypto');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   const data = req.query.data;
//   const algorithm = 'aes-256-cbc';
//   const key = crypto.randomBytes(32);
//   const iv = crypto.randomBytes(16);

//   const cipher = crypto.createCipheriv(algorithm, key, iv);
//   let encrypted = cipher.update(data, 'utf8', 'hex');
//   encrypted += cipher.final('hex');
//   res.render('index', { title: 'Express', key: key.toString('hex'), encrypted, iv: iv.toString('hex') });
// });

router.get('/', async (req, res) => {
  const { data } = req.body;

 
      const key = await crypto.subtle.generateKey(
          { name: 'AES-GCM', length: 256 },
          true,
          ['encrypt', 'decrypt']
      );

      const iv = crypto.getRandomValues(new Uint8Array(12));
      const encodedData = new TextEncoder().encode(data);

      const ciphertext = await crypto.subtle.encrypt(
          { name: 'AES-GCM', iv },
          key,
          encodedData
      );

      
      res.render('encrypt', { 
        title: process.env.FRAMEWORK, 
        ciphertext: Buffer.from(ciphertext).toString('base64')
      });
    
});


module.exports = router;
