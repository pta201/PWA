import { TodoItem } from "./TodoCard";
import { Flex } from "@chakra-ui/react";
import { Todo } from "../type";
interface TodoListProps {
  todos: Todo[];
}
export default function TodoList({ todos }: TodoListProps) {
  return (
    <Flex>
      {todos?.map((todo: Todo, index: number) => {
        return (
          <TodoItem
            key={index}
            content={todo.content}
            title={todo.title}
            status={todo.status}
            tags={todo.tags}
          />
        );
      })}
    </Flex>
  );
}
