import useData from "./useData";
import type { platform } from "./useGames";

const usePlatform = () => useData<platform>('/platforms/lists/parents');

export default usePlatform;
