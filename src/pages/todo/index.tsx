import TodoList from "./components/TodoList";
import todos from "./todos.json";
export default function TodoMain() {
  return <TodoList todos={todos} />;
}
