import express from 'express'
import bodyParser from 'body-parser';
import userRouter from './controller/users.mjs';

const app = express()
const port = 3000

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})