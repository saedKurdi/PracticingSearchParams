import { FC } from "react";
import { ArticleType } from "../../types/ArticleType";
import { ArticlesList } from "./styles";
import { Article } from "../Article/Article";

interface IArticles {
  articles: ArticleType[];
}

export const Articles: FC<IArticles> = ({ articles }) => {
  return (
    <ArticlesList>
      {articles.map((a) => (
        <Article article={a} key={a.id} />
      ))}
    </ArticlesList>
  );
};
