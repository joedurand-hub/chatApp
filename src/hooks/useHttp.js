import { useState, useCallback } from 'react';

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (url, method, body, token) => {
    setLoading(true);
    setError(null);
    setData(null);
    const requestOptions = {
      url,
      method,
      headers: {
        'Content-Type': 'application/json',
        'authtoken': token
      },
      token
    }
    if (body !== null) { 
      // debe ser pasado como obj --> { key: value }
      requestOptions.body = JSON.stringify(body);
    }
    try {
      const response = await fetch(url, requestOptions);
      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      console.error(error)
      setError(error || 'Something went wrong!');
    }
    setLoading(false);
  }, []);

  return { loading, data, error, sendRequest };
};

export default useHttp;
