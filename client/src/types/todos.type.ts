import { toEditorSettings } from "typescript";

export interface Todos {
  todos: Todo[];
}

interface Todo {
  _id: string;
  title: string;
  status: "completed" | "uncompleted";
  createdAt: string;
  updateAt: string;
  __v: number;
}

export interface getTodoResult {
  result: Todo;
}
