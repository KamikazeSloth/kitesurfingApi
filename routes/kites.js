var express = require('express');
const { mapKites } = require('../mappers/mapKites');
const { password, user } = require("../secrets")
var router = express.Router();
const pgp = require('pg-promise')()
const db = pgp(`postgres://${user}:${password}@localhost:5432/kiteequipment`)

router.get('/', function(req, res, next) {

db.any('SELECT * From kites')
.then((kites) => {
  console.log('DATA:', kites)
  const mappedKites = mapKites(kites)
  console.log("mapedKites", mappedKites)
  res.send(mappedKites);
})
.catch((error) => {
  console.log('ERROR:', error)
  res.send(error)
})
});

module.exports = router;
