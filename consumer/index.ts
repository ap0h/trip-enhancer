import * as dotenv from 'dotenv';
import * as http from 'http';
dotenv.config();

import app from './src/app';



const server = http.createServer(app);

const port = process.env.PORT || 3000;
server.listen(port);
server.once('listening', () => {
  console.log(`Server started on port ${port}`);
});

process.on('uncaughtException', (error) => {
  console.error('Error not cought');
  console.error(error);
});