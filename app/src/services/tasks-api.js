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
export function set(user, token) {
  return axios.post(TASKS_URL, user, {
    headers: { authorization: `Bearer ${token}` },
  });
}
export function update(id, parcialUser, token) {
  return axios.patch(TASKS_URL + id, parcialUser, {
    headers: { authorization: `Bearer ${token}` },
  });
}
export function remove(id, token) {
  return axios.delete(TASKS_URL + id, {
    headers: { authorization: `Bearer ${token}` },
  });
}
