import useGenres from '../hooks/useGenres';

const GameGenreList = () => {
  const { genres, erros, isLoading } = useGenres();

  return (
    <ul>
      {genres.map((genres) => (
        <li key={genres.id}>{genres.name}</li>
      ))}
    </ul>
  );
};

export default GameGenreList;
