import { Card, Flex, Heading, Inset } from "@radix-ui/themes";
import type { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import Metacritics from "./Metacritics";
import getCroppedImageUrl from "../services/image-url";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Inset clip="padding-box" side="top" pb="current">
        <img
          src={getCroppedImageUrl(game.background_image)}
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
      {/* <ul>{game.genres.map(g => <li>{g.name}</li>)}</ul> */}
      <Heading as="h3">{game.name}</Heading>
      <Flex justify="between" align="center">
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
        {game.metacritic && <Metacritics metacritics={game.metacritic} />}
      </Flex>
    </Card>
  );
};

export default GameCard;
