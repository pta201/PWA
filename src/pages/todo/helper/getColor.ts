import { TodoStatus } from "../type";

export const getColorScheme = (type: TodoStatus) => {
  const colorScheme: Record<TodoStatus, string> = {
    [TodoStatus.Todo]: "blue",
    [TodoStatus.Doing]: "orange",
    [TodoStatus.Done]: "green",
  };
  return colorScheme[type] ?? "gray";
};
