import { TodoItem } from "./TodoCard";
import { Flex } from "@chakra-ui/react";
import { Todo } from "../type";

export default function TodoList() {
  const todos = [
    {
      title: "Todo 1",
      content: "Todo 1 content",
    },
    {
      title: "Todo 2",
      content: "Todo 2 content",
    },
    {
      title: "Todo 3",
      content: "Todo 3 content",
    },
  ];
  return (
    <Flex>
      {todos.map((todo: Todo, index: number) => {
        return (
          <TodoItem key={index} content={todo.content} title={todo.title} />
        );
      })}
    </Flex>
  );
}
