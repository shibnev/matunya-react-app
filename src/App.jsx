import { Btn } from './components/Btn';
import useFetch from './hooks/useFetch';
import { Table } from './components/Table';

const FETCH_URL = 'https://animechan.vercel.app/api/quotes';

const App = () => {
  const { error, isLoading, data, getData, cancelData } = useFetch(FETCH_URL);

  return (
    <div className='app'>
      <div className='container mx-auto p-10'>
        <div className='flex gap-2 mb-2'>
          <Btn
            className='bg-purple-500 text-white hover:bg-white hover:text-purple-500'
            onClick={getData}
          >
            DOWNLOAD
          </Btn>
          <Btn
            className='text-purple-500 hover:text-white hover:bg-purple-500'
            onClick={cancelData}
          >
            CANCEL
          </Btn>
        </div>

        {error && <h2 className='text-red-600'>{error}</h2>}
        {isLoading && <p>Loading ...</p>}
        {data && <Table data={data} />}
      </div>
    </div>
  );
};

export default App;
