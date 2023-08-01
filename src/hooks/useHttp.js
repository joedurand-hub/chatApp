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
      if (!response.ok) {
        throw new Error(responseData.message || 'Something went wrong!');
      }
      setData(responseData);
    } catch (err) {
      setError(err.message || 'Something went wrong!');
    }
    setLoading(false);
  }, []);

  return { loading, data, error, sendRequest };
};

export default useHttp;
