/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as api from "../../services/tasks-api";

// First, create the thunk
export const getTasks = createAsyncThunk("tasks/getTasks", async () => {
  const response = await api.getAll();
  return response.data;
});
export const getTaskById = createAsyncThunk("tasks/getTaskById", async (id) => {
  const response = await api.get(id);
  return response.data;
});
export const setTask = createAsyncThunk("tasks/setTask", async (task) => {
  const response = await api.set(task);
  return response.data;
});
export const updateTask = createAsyncThunk(
  "tasks/updateTask",
  async (id, parcialTask) => {
    const response = await api.update(id, parcialTask);
    return response.data;
  }
);
export const removeTask = createAsyncThunk("tasks/removeTask", async (id) => {
  await api.remove(id);
  return { id };
});

const initialState = {
  tasks: [],
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: {
    [getTasks.fulfilled]: (state, action) => {
      state.tasks = action.payload;
    },
    [getTaskById.fulfilled]: (state, action) => {
      state.tasks = action.payload;
    },
    [setTask.fulfilled]: (state, action) => {
      state.tasks = [...state.task, action.payload];
    },
    [updateTask.fulfilled]: (state, action) => {
      state.tasks = state.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    [removeTask.fulfilled]: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload.id);
    },
  },
});

export default tasksSlice.reducer;
