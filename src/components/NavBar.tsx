import { Flex } from "@radix-ui/themes";
import Logo from "./Logo";

const NavBar = () => {
  return (
    <Flex direction="row" align={"center"} >
      <Logo />
    </Flex>
  );
};

export default NavBar;
