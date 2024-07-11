import { ChangeEvent, FC, useState } from "react";
import { Form, FormInput } from "./styles";
import { QueryType } from "../../types/QueryType";

interface ISearchArticleForm {
  searchQuery: QueryType;
  setSearchQuery: (query: QueryType) => void;
}

export const SearchArticleForm: FC<ISearchArticleForm> = ({
  searchQuery,
  setSearchQuery,
}) => {
  const [searchText, setSearchText] = useState<string>("");
  const onHandleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(e.target.value);
  };

  const setQueryAfterEnterPressed = () => {
    if (searchText.length > 0) {
      setSearchQuery({ ...searchQuery, name: searchText });
    }
  };
  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <FormInput
        name="name"
        value={searchText}
        onChange={onHandleChange}
        placeholder="Search By Text"
        onKeyDown={(e) => {
          if (e.code === "Enter") setQueryAfterEnterPressed();
        }}
      />
    </Form>
  );
};
