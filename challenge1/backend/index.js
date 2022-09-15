require('dotenv').config();

const server = require('./server');
var cors = require('cors')
server.use(cors())

const PORT = process.env.PORT || 3300;

server.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));