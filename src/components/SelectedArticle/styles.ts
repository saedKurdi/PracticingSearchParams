import styled from "styled-components";

const BigArticle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid springgreen;
  border-radius: 10px;
`;

const BigArticleText = styled.p`
  font-size: 30px;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  color: blueviolet;
  font-weight: bolder;
`;

export { BigArticle, BigArticleText };
