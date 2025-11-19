import { Grid, Text } from "@radix-ui/themes";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const skeletons = data?.length || 20;
  return (
    <>
      {error && <Text>{error}</Text>}

      <Grid
        columns={{ initial: "1", xs: "2", md: "3", lg: "4" }}
        gap="5"
        width="auto"
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
