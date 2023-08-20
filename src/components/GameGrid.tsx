import { Text, SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

const GameGrid = () => {
  const { erros, data, isLoading } = useGames();
  const skeleton = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {erros && <Text color="red">{erros}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={3} padding="16px">
        {isLoading &&
          skeleton.map((skeleton) => (
            <GameCardContainer>
              <GameCardSkeleton key={skeleton} />
            </GameCardContainer>
          ))}
        {data.map((data) => (
          <GameCardContainer>
            <GameCard key={data.id} game={data} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
