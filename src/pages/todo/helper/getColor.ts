import { TodoStatusValueType, TodoStatus } from "../type";

export const getColorScheme = (type: TodoStatusValueType) => {
  const colorScheme: Record<TodoStatusValueType, string> = {
    [TodoStatus.Todo]: "blue",
    [TodoStatus.Doing]: "orange",
    [TodoStatus.Done]: "green",
  };
  return colorScheme[type] ?? "gray";
};
