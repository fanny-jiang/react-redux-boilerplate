const router = require('express').Router()
module.exports = router

router.use((req, res, next) => {
  const err = new Error('Not found.')
  err.status = 404
  next(err)
})
