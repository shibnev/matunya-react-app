import { useState } from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const abortController = new AbortController();

  const getData = () => {
    setIsLoading(true);

    fetch(url, {
      method: 'get',
      signal: abortController.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw Error(`could not fetch the data from ${url}`);
        }
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  const cancelData = () => {
    abortController.abort();
    setData(false);
  };

  return { data, isLoading, error, getData, cancelData };
};

export default useFetch;
