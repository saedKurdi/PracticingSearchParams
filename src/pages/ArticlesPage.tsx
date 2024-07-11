import { Link, useSearchParams } from "react-router-dom";
import { SearchArticleForm } from "../components/SearchArticleForm/SearchArticleForm";
import { Articles } from "../components/Articles/Articles";
import { useArticleContext } from "../contexts/ArticleContextProvider";
import { useEffect } from "react";
import { QueryType } from "../types/QueryType";
export default function ArticlesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { filterArticlesByQuery, filteredArticles } = useArticleContext();
  console.log(searchParams);

  if (searchParams.size === 0) {
    const defaultQuery: QueryType = {
      name: "all",
    };
    setSearchParams(defaultQuery);
  }

  useEffect(() => {
    const searchQueries: QueryType = {
      name: searchParams.get("name") || "all",
    };
    filterArticlesByQuery(searchQueries);
  }, [searchParams]);

  return (
    <>
      <Link to={"/"}>To Home Page</Link>
      <SearchArticleForm
        setSearchQuery={setSearchParams}
        searchQuery={Object.fromEntries([...searchParams]) as QueryType}
      />
      <Articles articles={filteredArticles} />
    </>
  );
}
