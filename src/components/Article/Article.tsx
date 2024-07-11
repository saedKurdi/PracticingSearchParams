import { FC } from "react";
import { ArticleType } from "../../types/ArticleType";
import { ArticleContainer, ArticleID, ArticleText } from "./styles";
import { useNavigate } from "react-router-dom";

interface IArticle {
  article: ArticleType;
}

export const Article: FC<IArticle> = ({ article }) => {
  const navigate = useNavigate();
  const toSpecialArticlePage = () => {
    navigate(`/articles/${article.id}`);
  };
  return (
    <ArticleContainer onClick={toSpecialArticlePage}>
      <ArticleID>ID - {article.id}</ArticleID>
      <ArticleText>{article.text}</ArticleText>
    </ArticleContainer>
  );
};
