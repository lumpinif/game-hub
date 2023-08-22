import { GameQuery } from '../App';
import { Heading } from '@chakra-ui/react';

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.parent_platforms?.name || ''} ${
    gameQuery.genre?.name || ''
  } Games`;

  return (
    <Heading as="h1" marginBottom={5} fontSize={'5xl'}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
