import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import { mongoConnect } from './services/db';
import tasksRouter from './routes/tasks.routes';
import { taskCreator } from './models/task.model';
import auth from './routes/auth.routes';
import './auth/passport';

export const app = express();
const port = 3001;

mongoConnect();
export const Task = taskCreator();

app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

app.use('/', auth);
app.use(
    '/tasks',
    passport.authenticate('jwt', { session: false }),
    tasksRouter
);

// eslint-disable-next-line no-unused-vars
app.use((err, req, resp, next) => {
    resp.status(err.status);
    resp.json({ error: err.message });
});

export const server = app.listen(port);
