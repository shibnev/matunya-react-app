export const Table = ({ data }) => {
  const Th = ({ children }) => <th className='border border-purple-600'>{children}</th>;
  const Td = ({ children }) => <td className='border border-purple-700'>{children}</td>;

  return (
    <table className='table-auto border-collapse border border-slate-500'>
      <thead>
        <tr>
          <Th>Anime</Th>
          <Th>Character</Th>
          <Th>Quote</Th>
        </tr>
      </thead>
      <tbody>
        {data.map(({ anime, character, quote }, index) => (
          <tr key={index}>
            <Td>{anime}</Td>
            <Td>{character}</Td>
            <Td>{quote}</Td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
