const express =  require('express')
const actorsRouter = require('./routers/actorsRouter')
const logger = require('./middlewares/logger')
const errorHandling = require('./middlewares/errorHandling')

const server = express()
server.use(express.json())
server.use(logger)

server.use('/actors', actorsRouter)


server.get('/', (req, res) => {
  res.send('Welcome to main address.');
});

server.use(errorHandling)

let port = 5000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}..`);
});
