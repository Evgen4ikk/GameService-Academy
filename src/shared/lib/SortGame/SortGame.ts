import { IGamesResult } from '@/entities/Game/model/types/game/game';

export const sortGames = (
  games: IGamesResult[],
  sortOption: string,
  platformOption: string
): IGamesResult[] => {
  let sortedGamesCopy = [...games];

  if (sortOption === 'lowRating') {
    sortedGamesCopy.sort((a, b) => a.rating - b.rating);
  } else if (sortOption === 'highRating') {
    sortedGamesCopy.sort((a, b) => b.rating - a.rating);
  } else if (sortOption === 'releaseDate') {
    sortedGamesCopy.sort(
      (a, b) => new Date(a.released).getTime() - new Date(b.released).getTime()
    );
  }

  if (platformOption !== '') {
    sortedGamesCopy = sortedGamesCopy.filter(game =>
      game.platforms.some(platform => platform.platform.slug === platformOption)
    );
  }

  return sortedGamesCopy;
};
