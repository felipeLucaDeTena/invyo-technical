import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import passport from 'passport';
import { mongoConnect } from './services/db.js';
import tasksRouter from './routes/tasks.routes.js';
import { taskCreator } from './models/task.model.js';
import auth from './routes/auth.routes.js';
import './auth/passport.js';

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
