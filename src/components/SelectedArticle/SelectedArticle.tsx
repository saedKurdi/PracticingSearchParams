import { FC } from "react";
import { ArticleType } from "../../types/ArticleType";
import { BigArticle, BigArticleText } from "./styles";

interface ISelectedArticle {
  article: ArticleType | undefined;
}

export const SelectedArticle: FC<ISelectedArticle> = ({ article }) => {
  return (
    <BigArticle>
      <BigArticleText>ID {article?.id}</BigArticleText>
      <BigArticleText>{article?.bigText}</BigArticleText>
    </BigArticle>
  );
};
