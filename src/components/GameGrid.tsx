import { Grid, Text } from "@radix-ui/themes";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import type { GameQuery } from "../App";
import useGames from "../hooks/useGames";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading = true } = useGames(gameQuery);
  const skeletons = data?.length || 20;
  return (
    <>
      {error && <Text>{error}</Text>}

      <Grid
        columns={{ initial: "1", xs: "2", md: "3", lg: "4" }}
        gap="5"
        width="100%"
      >
        {isLoading &&
          Array.from({ length: skeletons }).map((_, index) => (
            <GameCardSkeleton key={index} />
          ))}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </Grid>
    </>
  );
};
export default GameGrid;
