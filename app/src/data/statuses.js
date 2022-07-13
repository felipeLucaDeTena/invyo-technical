import { v4 as uuidv4 } from "uuid";

const statuses = [
  {
    id: uuidv4(),
    status: "In Progress",
    color: "#d0fac0",
  },
  {
    id: uuidv4(),
    status: "Completed",
    color: "#fdf7c6",
  },
];

export default statuses;
