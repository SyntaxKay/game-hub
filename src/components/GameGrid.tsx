import { Grid, Text } from "@radix-ui/themes";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import type { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, isLoading } = useGames(selectedGenre);
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
