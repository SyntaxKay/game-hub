import { Grid, Text } from "@radix-ui/themes";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <Grid columns={{initial: "1", xs:"2", md: "3", lg: "4"}} gap="5" width="auto">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </Grid>
    </>
  );
};
export default GameGrid;
