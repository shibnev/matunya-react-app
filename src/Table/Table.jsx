import styles from './Table.module.scss';

export const Table = ({ data }) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th}>Anime</th>
          <th className={styles.th}>Character</th>
          <th className={styles.th}>Quote</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className={styles.td}>{item.anime}</td>
            <td className={styles.td}>{item.character}</td>
            <td className={styles.td}>{item.quote}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
