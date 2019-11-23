
const express = require('express')
const router = express.Router()

router.get('/healthcheck', (req, res) => res.send('OK'))

router.get('/article', async (req, res) => {
  try {
    const apiUrl = config.get('server.articleApiBaseUrl')
    const tagId = R.path(['query', 'tagId'], req)
    const offset = R.path(['query', 'offset'], req)
    const limit = R.path(['query', 'limit'], req)
    if (tagId) {
      const { data } = await axios.get(`${apiUrl}/feed/tag/${tagId}`, {
        params: { offset, limit },
      })
      return res.json(data)
    } else {
      res.status(404).send('Tag Id is Empty')
    }
  } catch (e) {
    console.error(e)
    res.status(404).send('Not found')
  }
})

router.get('*', (req, res) => {
  res.status(404).send('Not found')
})

module.exports = router
