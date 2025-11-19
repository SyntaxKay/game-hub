import useData from "./useData";
import type { platforms } from "./useGames";

const usePlatform = () => useData<platforms>('/platforms/lists/parents');

export default usePlatform;
