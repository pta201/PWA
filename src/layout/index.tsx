import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <Flex
      style={{
        minHeight: "100vh",
      }}
    >
      <Flex flexDirection={"column"} flex="1">
        <Header />
        <Box flex="1">
          <Outlet />
        </Box>

        <Footer />
      </Flex>
    </Flex>
  );
}
