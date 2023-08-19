import { Text, SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {
  const { erros, games } = useGames();
  return (
    <>
      {erros && <Text color="red">{erros}</Text>}
      <SimpleGrid columns={[1, 2, 3]} spacing={10} padding="16px">
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
