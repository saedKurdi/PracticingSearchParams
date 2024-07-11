import styled from "styled-components";

const ArticleContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  border: 1px solid springgreen;
  border-radius: 7px;
  gap: 5px;
  width: 450px;
  height: 300px;
  cursor: pointer;
`;

const ArticleID = styled.p`
  font-size: 25px;
  font-weight: bold;
`;

const ArticleText = styled.p`
  font-size: 20px;
`;

export { ArticleContainer, ArticleID, ArticleText };
