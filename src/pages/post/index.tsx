import { Link } from "react-router-dom";
import { handleChangeRepositoryDescription } from "../../QueryProvider/invalidateQueries";
import { useParams } from "react-router-dom";
export const Post = () => {
  const params = useParams();
  const post = params["*"] as string;

  return (
    <>
      <h1>{post}</h1>
      <button onClick={() => handleChangeRepositoryDescription("posts")}>
        <Link to={"/"}>Voltar</Link>
      </button>
    </>
  );
};
