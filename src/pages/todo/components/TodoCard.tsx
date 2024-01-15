import { Stack, useColorModeValue, Heading, Box, Text } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { Todo } from "../type";

export const TodoCard = (props: PropsWithChildren) => {
  const { children } = props;

  return <Box>{children}</Box>;
};

export const TodoContent = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"lg"}
      p={8}
      rounded={"xl"}
      align={"center"}
      pos={"relative"}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: "solid transparent",
        borderLeftWidth: 16,
        borderRight: "solid transparent",
        borderRightWidth: 16,
        borderTop: "solid",
        borderTopWidth: 16,
        borderTopColor: useColorModeValue("white", "gray.800"),
        pos: "absolute",
        bottom: "-16px",
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      {children}
    </Stack>
  );
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
export const TodoItem = ({
  content = "11:00 Mo (Jan 30)",
  title = "Call Mom",
}: Todo) => {
  return (
    <TodoCard>
      <TodoContent>
        <TodoTitle>{title}</TodoTitle>
        <TodoText>{content}</TodoText>
      </TodoContent>
    </TodoCard>
  );
};
