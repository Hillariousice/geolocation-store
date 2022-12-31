const { getStores , addStores, updateStore,deleteStore}= require('../controller/stores')

const express = require('express')
const router = express.Router()


router.get('/',getStores)
router.post('/',addStores)
router.patch('/:_id',updateStore)
router.delete('/:_id',deleteStore)


module.exports = router