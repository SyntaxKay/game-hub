import { Heading } from "@radix-ui/themes";
import type { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.genre?.name || ""} ${
    gameQuery.platform?.name || ""
  } Games`;
  return (
    <Heading my={"5"} size={"9"}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
