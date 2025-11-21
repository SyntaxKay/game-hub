import { Flex } from "@radix-ui/themes";
import Logo from "./Logo";
import Search from "./Search";

interface SearchProps {
  onSearch: (query: string) => void;
}

const NavBar = ({ onSearch }: SearchProps) => {
  return (
    <Flex direction="row" align={"center"} gap="3" width={"100%"}>
      <Logo />
      <Search onSearch={onSearch} />
    </Flex>
  );
};

export default NavBar;
