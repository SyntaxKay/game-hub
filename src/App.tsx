import { Box, Flex, Grid, Theme } from "@radix-ui/themes";
import "./App.css";
import NavBar from "./components/NavBar";
import { ColorModeToggle } from "./components/ColorModeToggle";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import type { Genre } from "./hooks/useGenres";
import PlatformFilter from "./components/PlatformFilter";
import type { platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: platform | null;
}

function App() {
  const [appearance, setAppearance] = useState<"light" | "dark">(
    (localStorage.getItem("appearance") as "light" | "dark") || "light"
  );
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
  return (
    <Theme
      accentColor="indigo"
      grayColor="sand"
      radius="large"
      scaling="95%"
      appearance={appearance}
    >
      <Grid
        columns={{ initial: "1", sm: "250px 1fr", md: "300px 1fr" }}
        gap="3"
        rows="repeat(2, auto)"
        width="auto"
        p={"3"}
      >
        <Flex align={"center"} justify={"between"} gap="3" gridColumn="1 / -1">
          <NavBar />
          <ColorModeToggle onChange={setAppearance} initial={appearance} />
        </Flex>
        <Box display={{ initial: "none", sm: "block" }} p={"3"}>
          <GenreList
            selectedGenre={gameQuery?.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </Box>
        <Flex p={"3"} direction={"column"} align={"start"} gap="3">
          <PlatformFilter
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
            selectedPlatform={gameQuery?.platform}
          />
          <GameGrid gameQuery={gameQuery} />
        </Flex>
      </Grid>
    </Theme>
  );
}

export default App;
