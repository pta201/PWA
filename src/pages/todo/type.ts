export interface Todo {
  title: string;
  content: string;
  status: TodoStatus;
  tags: ITodoTag[];
}

export interface ITodoTag {
  name: string;
  color: string;
}

export enum TodoStatus {
  Todo = "todo",
  Doing = "doing",
  Done = "done",
}

export const generateDummyData = (): Todo[] => {
  const dummyData: Todo[] = [];

  for (let i = 1; i <= 10; i++) {
    const todo: Todo = {
      title: `Todo ${i}`,
      content: `This is the content of Todo ${i}`,
      status: TodoStatus.Todo,
      tags: [
        { name: "Tag 1", color: "#FF0000" },
        { name: "Tag 2", color: "#00FF00" },
      ],
    };

    dummyData.push(todo);
  }

  return dummyData;
};
