export {
  getGameCurrentPage,
  getGameData,
  getGameError,
  getGameIsLoading,
} from './model/selectors/game';

export {
  getGameDetailData,
  getGameDetailError,
  getGameDetailIsLoading,
} from './model/selectors/gameDetail';

export {
  getGameByGenreData,
  getGameByGenreError,
  getGameByGenreIsLoading,
} from './model/selectors/gameByGenre';

export {
  getGameByDeveloperData,
  getGameByDeveloperError,
  getGameByDeveloperIsLoading,
} from './model/selectors/gameByDeveloper';

export { fetchGames } from './model/services/fetchGames';
export { fetchGamesByDeveloper } from './model/services/fetchGamesByDeveloper';
export { fetchGamesByGenre } from './model/services/fetchGamesByGenre';
export { fetchGamesById } from './model/services/fetchGamesById';

export type { IGames } from './model/types/game/game';

export { GameCard } from './ui/GameCard';
