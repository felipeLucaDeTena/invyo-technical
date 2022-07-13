/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
import mongoose from 'mongoose';

export function taskCreator(modelName = 'Task') {
    const taskSchema = new mongoose.Schema({
        title: { type: String, required: true },
        description: { type: String, required: true },
        deadline: { type: String, required: true },
        created_at: { type: String, required: true },
        status: { type: String, required: true },
    });

    taskSchema.set('toJSON', {
        transform: (document, returnedObject) => {
            (returnedObject.id = returnedObject._id), delete returnedObject.__v;
            delete returnedObject._id;
        },
    });

    let Task;
    if (mongoose.default.models[modelName]) {
        Task = mongoose.model(modelName);
    } else {
        Task = mongoose.model(modelName, taskSchema);
    }
    return Task;
}

export const Task = taskCreator();
