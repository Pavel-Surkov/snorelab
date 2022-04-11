import { useState, useEffect } from 'react';

const usePost = (url, slug, options) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const data = await response.json();

        const post = data.find((item) => item.slug === slug);

        setData(post);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, []);

  return { data, error };
};

export default usePost;
