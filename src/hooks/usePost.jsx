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

        if (post) {
          setData(post);
        }
      } catch (err) {
        setError(err);
      }
    };

    fetchData();
  }, [slug]);

  if (data) {
    return { data, error };
  } else {
    return { data: null, error: null };
  }
};

export default usePost;
