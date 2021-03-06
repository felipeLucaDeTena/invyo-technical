import express from 'express';

import {
    getAllTasks,
    getTask,
    insertTask,
    updateTask,
    deleteTask,
} from '../controllers/task.controllers.js';

const router = express.Router();

router.get('/', getAllTasks);
router.get('/:id', getTask);
router.post('/', insertTask);
router.patch('/:id', updateTask);
router.delete('/:id', deleteTask);

export default router;
