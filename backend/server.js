const express = require('express')
const cors = require('cors')
const userRouter = require('./routes/route.user')

const app = express()
const port = 3000


app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.use(userRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})