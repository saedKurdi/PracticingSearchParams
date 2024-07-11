import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticlesPage from "./pages/ArticlesPage";
import SpecialArticlePage from "./pages/SpecialArticlePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/articles/:articleId" element={<SpecialArticlePage />} />
      </Routes>
    </>
  );
}

export default App;
