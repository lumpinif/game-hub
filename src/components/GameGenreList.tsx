import useGenres from '../hooks/useGenres';

const GameGenreList = () => {
  const { data } = useGenres();

  return (
    <ul>
      {data.map((data) => (
        <li key={data.id}>{data.name}</li>
      ))}
    </ul>
  );
};

export default GameGenreList;
