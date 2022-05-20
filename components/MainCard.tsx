import React, { useState } from "react";
import { Movie } from "../utils/types";
import { useFetch } from "../utils/useFetch";
import { MovieResult } from "./MovieResult";
import { SearchForm } from "./SearchForm";
import { v4 as uuidv4 } from "uuid";

interface MainCardProps {}

export const MainCard: React.FC<MainCardProps> = ({}) => {
  const [url, setUrl] = useState("");
  const { data, loading, errors } = useFetch(url);

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>,
    title: string,
    page: number
  ) => {
    e.preventDefault();
    const titleParam = title.split(" ").join("+");
    setUrl(
      `https://www.omdbapi.com/?s=${titleParam}&page=${page}&apikey=353c1f3f`
    );
  };

  return (
    <div className="main-card my-16">
      <div className="mt-4">
        <SearchForm handleSubmit={handleSubmit} />
      </div>
      {loading === true ? (
        <div className="mt-10">Loading movies...</div>
      ) : (
        <div className="mt-10 mb-8 grow grid grid-cols-2 gap-x-8 gap-y-2">
          {errors
            ? "No movies with that title were found."
            : data.map((movie: Movie) => (
                <div key={uuidv4()}>
                  <MovieResult movie={movie} />
                </div>
              ))}
        </div>
      )}
    </div>
  );
};
