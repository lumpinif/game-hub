import {
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Image,
} from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';

// interface Props {
//   game: Game;
// }
const GameCard = ({ game }: { game: Game }) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={4}>
          <PlatformIconList
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize={'2xl'}>{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
