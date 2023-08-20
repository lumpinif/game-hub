import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCropedImageUrl from '../services/img-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
}
const GameGenreList = ({ onSelectGenre }: Props) => {
  const { data, isLoading, erros } = useGenres();

  if (erros) return null;
  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCropedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
            />
            <Button
              variant={'link'}
              fontSize="lg"
              onClick={() => onSelectGenre(genre)}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GameGenreList;
