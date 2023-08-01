import { useState, useCallback } from 'react';

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (url, method, body) => {
    setLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const responseData = await response.json();
      console.log("responseData:", responseData)
      setData(responseData);
    } catch (error) {
      setError(error || 'Something went wrong!');
    }
    setLoading(false);
  }, []);

  return { loading, data, error, sendRequest };
};

export default useHttp;
