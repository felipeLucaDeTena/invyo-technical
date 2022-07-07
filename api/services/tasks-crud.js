export async function getAllTasks(Task) {
    return Task.find({});
}

export async function getTask(id, Task) {
    return Task.findById(id);
}

export async function insertTask(body, Task) {
    const newTask = new Task(body);
    const result = await newTask.save();
    return result;
}

export async function updateTask(id, partialTask, Task) {
    return Task.findByIdAndUpdate(id, partialTask, { new: true });
}

export async function deleteTask(id, Task) {
    return Task.findByIdAndDelete(id);
}
