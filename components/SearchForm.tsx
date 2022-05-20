import React, { useState } from "react";

interface SearchFormProps {
  handleSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    title: string,
    page: number
  ) => void;
}

export const SearchForm: React.FC<SearchFormProps> = ({ handleSubmit }) => {
  const [title, setTitle] = useState("");
  const [page, setPage] = useState(1);

  const incrementPage = () => {
    setPage((pageNum) => pageNum + 1);
  };

  const decrementPage = () => {
    if (page > 1) {
      setPage((pageNum) => pageNum - 1);
    }
  };

  return (
    <form onSubmit={(e) => handleSubmit(e, title, page)}>
      <div className="flex w-[500px]">
        <input
          className="search-input"
          type="text"
          name="title"
          placeholder="Search movies"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <div className="flex">
          <span className="self-center mr-2 text-lg">Page: {page}</span>
          <div className="flex flex-col">
            <button className="page-btn" onClick={incrementPage} type="button">
              ↑
            </button>
            <button className="page-btn" onClick={decrementPage} type="button">
              ↓
            </button>
          </div>
          <button className="search-btn ml-4 mb-1">Search</button>
        </div>
      </div>
    </form>
  );
};
