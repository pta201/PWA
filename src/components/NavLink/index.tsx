import { Button } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import { NavLink as ReactRouterNavLink } from "react-router-dom";

export const NavLink = (props: PropsWithChildren & { href: string }) => {
  const { children, href } = props;

  return (
    <ReactRouterNavLink to={href}>
      {({ isActive }) => {
        return (
          <Button
            colorScheme="teal"
            size="sm"
            variant={isActive ? "solid" : "ghost"}
            as={"a"}
          >
            {children}
          </Button>
        );
      }}
    </ReactRouterNavLink>
  );
};
