import { useState } from 'react';
import { Btn } from './Btn';
import { Table } from './Table';

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
      <div className='container mx-auto p-10'>
        <div className='flex gap-2 mb-2'>
          <Btn
            className='rounded-none bg-purple-500 text-white text-lg font-bold hover:bg-white hover:text-purple-500'
            onClick={fetchData}
          >
            DOWNLOAD
          </Btn>
          <Btn
            className='rounded-none text-purple-500 text-lg font-bold hover:text-white hover:bg-purple-500'
            onClick={cancelData}
          >
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
