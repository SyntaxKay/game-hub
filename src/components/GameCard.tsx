import { Card, Heading, Inset } from "@radix-ui/themes";
import type { Game } from "../hooks/useGames";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Inset clip="padding-box" side="top" pb="current">
        <img
          src={game.background_image}
          alt={game.name}
          style={{
            display: "block",
            objectFit: "cover",
            width: "100%",
            height: 200,
            backgroundColor: "var(--gray-5)",
          }}
        />
      </Inset>
      <Heading as="h3">{game.name}</Heading>
    </Card>
  );
};

export default GameCard;
