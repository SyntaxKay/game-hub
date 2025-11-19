import useData from "./useData";
import type { Genre } from "./useGenres";

export interface platforms {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platforms }[]; //object array
  metacritic: number;
  genres: Genre[];
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: platforms | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlatform?.id } },
    [selectedGenre?.id, selectedPlatform?.id]
  );

export default useGames;
