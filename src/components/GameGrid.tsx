import { Text, SimpleGrid } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { errors, data, isLoading } = useGames(gameQuery);
  const skeleton = [1, 2, 3, 4, 5, 6];

  if (errors) return <Text color="red">{errors}</Text>;

  return (
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={5} padding="16px">
      {isLoading &&
        skeleton.map((skeleton) => (
          <GameCardContainer key={skeleton}>
            <GameCardSkeleton />
          </GameCardContainer>
        ))}
      {data.map((data) => (
        <GameCardContainer key={data.id}>
          <GameCard key={data.id} game={data} />
        </GameCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default GameGrid;
