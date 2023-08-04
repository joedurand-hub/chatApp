import { useState, useEffect, useCallback } from 'react';

const useHttp = () => {
  const [token, setToken] = useState("")
  
  useEffect(() => {
    const authtoken = localStorage.getItem('authtoken');
    setToken(authtoken)
  }, [])

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
          'authtoken': token
        },
      });
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
