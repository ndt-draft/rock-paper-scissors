import React from "react";
import { useEffect, useState } from "react";

export default function SimpleFetch({ url }) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setPosts(result);
      } catch (err) {
        // console.error("Fetch error:", err);
        setError(err);
      }
    }

    fetchData();
  }, [url]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (posts.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {posts.map((post, index) => (
        <li key={index}>{post}</li>
      ))}
    </ul>
  );
}
