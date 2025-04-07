import { useEffect, useState } from "react";
import { fetchPosts, fetchComments } from "./api";

const PromiseAll = () => {
  const [data, setData] = useState(null);
  const [comments, setComments] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [postsData, commentsData] = await Promise.all([
          fetchPosts(),
          fetchComments(),
        ]);
        setData(postsData);
        setComments(commentsData);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data?.map((post) => (
        <h1 key={post.id}>{post.title}</h1>
      ))}
      {comments?.map((comment) => (
        <p key={comment.id}>{comment.body}</p>
      ))}
    </div>
  );
};

export default PromiseAll;
