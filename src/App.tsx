import { Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GameGenreList from './components/GameGenreList';
import { useState } from 'react';
import { Genre } from './hooks/useGenres';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './hooks/usePlatforms';
import SortSelector from './components/SortSelector';

export interface GameQuery {
  genre: Genre | null;
  parent_platforms: Platform | null;
}
function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="App">
      <Grid
        templateAreas={{
          base: `"nav"  "main"`,
          // md: `"nav nav" "main main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          // md: '1fr 1fr',
          lg: '250px 1fr',
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GameGenreList
              selectedGenre={gameQuery.genre}
              onSelectGenre={(genre) =>
                setGameQuery({ ...gameQuery, genre: genre })
              }
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <HStack spacing={5} paddingLeft={4} marginBottom={2}>
            <PlatformSelector
              selectedPlatform={gameQuery.parent_platforms}
              onSelectedPlatform={(platform) =>
                setGameQuery({ ...gameQuery, parent_platforms: platform })
              }
            />
            <SortSelector />
          </HStack>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </div>
  );
}

export default App;
