import axios from "axios";

const TASKS_URL = "http://localhost:3001/tasks/";

export function getAll(token) {
  return axios.get(TASKS_URL, {
    headers: { authorization: `Bearer ${token}` },
  });
}
export function get(id, token) {
  return axios.get(TASKS_URL + id, {
    headers: { authorization: `Bearer ${token}` },
  });
}
export function set(task, token) {
  return axios.post(TASKS_URL, task, {
    headers: { authorization: `Bearer ${token}` },
  });
}
export function update(id, parcialTask, token) {
  return axios.patch(TASKS_URL + id, parcialTask, {
    headers: { authorization: `Bearer ${token}` },
  });
}
export function remove(id, token) {
  return axios.delete(TASKS_URL + id, {
    headers: { authorization: `Bearer ${token}` },
  });
}
