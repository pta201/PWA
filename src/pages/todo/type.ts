export interface Todo {
  title: string;
  content: string;
  status: TodoStatusKeyType;
  tags: ITodoTag[];
}
export interface ITodoTag {
  name: string;
  color: string;
}
export const TodoStatus = {
  Todo: "todo",
  Doing: "doing",
  Done: "done",
} as const;
export type TodoStatusValueType = (typeof TodoStatus)[keyof typeof TodoStatus];
export type TodoStatusKeyType = keyof typeof TodoStatus;
