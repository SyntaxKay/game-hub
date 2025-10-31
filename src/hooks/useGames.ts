import { useEffect, useState } from "react";
import apiClient from "../services/api-clients";
import { Cancel } from "@radix-ui/themes/components/alert-dialog";

interface Game {
  id: number;
  name: string;
}

interface GameListInterface {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const abortCtrl = new AbortController();
    apiClient
      .get<GameListInterface>("/games", { signal: abortCtrl.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof Cancel) return;
        setError(err.message);
      });

    return () => abortCtrl.abort();
  }, []);

  return { games, error };
};

export default useGames;
