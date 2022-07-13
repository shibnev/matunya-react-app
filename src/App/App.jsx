import { useState } from 'react';
import { Btn } from '../Btn/Btn';
import { Table } from '../Table/Table';
import styles from './App.module.scss';

const FETCH_URL = 'https://animechan.vercel.app/api/quotes';

const App = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = () => {
    setIsLoading(true);

    fetch(FETCH_URL)
      .then((response) => response.json())
      .then((quotes) => {
        setData(quotes);
        setIsLoading(false);
      });
  };

  const cancelData = () => setData(false);

  return (
    <div className='app'>
      <div className={styles.inner}>
        <div className={styles.wrapBtn}>
          <Btn className={styles.btnApply} onClick={fetchData}>
            DOWNLOAD
          </Btn>
          <Btn className={styles.btnCancel} onClick={cancelData}>
            CANCEL
          </Btn>
        </div>

        {isLoading && <p>Loading ...</p>}
        {data && <Table data={data} />}
      </div>
    </div>
  );
};

export default App;
