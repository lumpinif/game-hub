import { GameQuery } from '../App';
import useData from './useData';
import { Genre } from './useGenres';

export interface platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platform }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.parent_platforms?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
