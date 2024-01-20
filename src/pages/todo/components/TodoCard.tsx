import {
  useColorModeValue,
  Heading,
  Box,
  Text,
  Tag,
  Flex,
} from "@chakra-ui/react";
import { Todo, ITodoTag } from "../type";
import { PropsWithChildren } from "react";
import { isEmpty } from "lodash";

export const TodoCard = (props: PropsWithChildren) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

export const TodoTitle = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <Heading as={"h3"} fontSize={"xl"}>
      {children}
    </Heading>
  );
};

export const TodoText = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("gray.600", "gray.400")}
      fontSize={"sm"}
    >
      {children}
    </Text>
  );
};
const TodoContent = ({ children }: PropsWithChildren) => {
  return <Box>{children}</Box>;
};
const TodoTag = ({ color, name }: ITodoTag) => {
  return <Tag colorScheme={color}>{name}</Tag>;
};
const TodoTagList = ({ tags }: { tags: ITodoTag[] }) => {
  if (isEmpty(tags)) return <></>;
  return (
    <Flex gap={8} justify={"start"}>
      {tags?.map((item) => (
        <TodoTag color={item.color} name={item.name} key={item.name} />
      ))}
    </Flex>
  );
};
export const TodoItem = ({
  content = "11:00 Mo (Jan 30)",
  title = "Call Mom",
  tags,
}: Todo) => {
  return (
    <TodoCard>
      <TodoContent>
        <TodoTitle>{title}</TodoTitle>
        <TodoText>{content}</TodoText>
        <TodoTagList tags={tags} />
      </TodoContent>
    </TodoCard>
  );
};
