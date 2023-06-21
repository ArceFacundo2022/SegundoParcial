const router = require('express').Router()

const {connectMongo, connectMariaDB} = require('../controllers/endPoints')

router.get("/check-mariadb-connection",connectMariaDB)
router.get("/check-mongodb-connection",connectMongo)

module.exports = router