import { useEffect, useState } from "react";
import apiClient from "../services/api-clients";
import { CanceledError } from "axios";

export interface platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platform }[]; //object array
  metacritic: number
}

interface GameListInterface {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState(false)
  useEffect(() => {
    const abortCtrl = new AbortController();
    setLoading(true)
    apiClient
      .get<GameListInterface>("/games", { signal: abortCtrl.signal })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false)
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false)
      });

    return () => abortCtrl.abort();
  }, []);

  return { games, error, isLoading };
};

export default useGames;
