var express = require('express')
var router = express.Router()
 


const fs = require('fs');

fs.readdir(__dirname+'/front', (err, files) => {
  if(err) throw err
  files.forEach(file => {
    let routerName = file.split('.')[0]
    router.use(`/${routerName}`, require(`./front/${routerName}`));    
  });
})
 

module.exports = router;



