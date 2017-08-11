const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))

router.use((req, res, next) => {
  const err = new Error('Not found.')
  err.status = 404
  next(err)
})
