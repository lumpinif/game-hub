import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCropedImageUrl from '../services/img-url';

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}
const GameGenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, isLoading, errors } = useGenres();

  if (errors) return null;
  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading marginY={5}>Genres</Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY="5px">
            <HStack>
              <Image
                src={getCropedImageUrl(genre.image_background)}
                boxSize="32px"
                objectFit="cover"
                borderRadius={8}
              />
              <Button
                whiteSpace={'normal'}
                textAlign={'left'}
                variant={'link'}
                fontSize="lg"
                fontWeight={
                  selectedGenre?.id === genre.id ? 'extrabold' : 'normal'
                }
                _hover={{ color: 'gray.500' }}
                onClick={() => onSelectGenre(genre)}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GameGenreList;
