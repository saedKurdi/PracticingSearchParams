import { Link, useParams } from "react-router-dom";
import { useArticleContext } from "../contexts/ArticleContextProvider";
import { SelectedArticle } from "../components/SelectedArticle/SelectedArticle";

export default function SpecialArticlePage() {
  const { filteredArticles } = useArticleContext();
  const params = useParams();
  const id = Number(params.articleId);
  const selectedArticle = filteredArticles.find((a) => a.id === id);
  return (
    <>
      <Link to={"/articles"}>To Articles Page</Link>
      <h1>ARTICLE BIG-TEXT</h1>
      <SelectedArticle article={selectedArticle} />
    </>
  );
}
