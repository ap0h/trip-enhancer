import * as express from 'express';
import * as cors from 'cors';
import * as compression from 'compression';
import * as helmet from 'helmet';
import apiRoutes from './routes';
import  "./modules/kafka";

const app = express();

app.use(cors());
app.use(compression());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api', apiRoutes);

export default app;