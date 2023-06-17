import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ArticleDetails = () => {
  const [article, setArticle] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((article) => {
        setArticle(article);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.image} alt="img" />
      <p>{article.price} €</p>
      <p>{article.description}</p>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default ArticleDetails;
