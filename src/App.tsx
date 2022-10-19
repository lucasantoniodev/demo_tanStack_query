import { useState } from "react";
import { usePostsQuery } from "./QueryProvider/usePostQuery";
import { Link } from "react-router-dom";

export const App = () => {
  const { data, isLoading, error } = usePostsQuery("posts");
  const [number, setNumber] = useState(0);

  return (
    <ul>
      <button onClick={() => setNumber(number + 1)}>Clicou: {number}</button>
      {data?.map((post) => {
        return (
          <li key={post._id}>
            <Link to={`/post/${post.name}`}>{post.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};
