const express = require('express')
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Server of 007 is on the way....')
})

app.listen(port, () => {
  console.log(`i am server of Your site ${port}`)
})