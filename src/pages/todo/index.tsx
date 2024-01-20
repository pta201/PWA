import TodoList from "./components/TodoList";
import { generateDummyData } from "./type";
export default function TodoMain() {
  return <TodoList todos={generateDummyData()} />;
}
