import { Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';

const GameGrid = () => {
  const { erros, games } = useGames();
  return (
    <>
      {erros && <Text color="red">{erros}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
