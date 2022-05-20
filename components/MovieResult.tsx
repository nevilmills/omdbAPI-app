import Image from "next/image";
import React, { useState } from "react";
import { Movie } from "../utils/types";

interface MovieResultProps {
  movie: Movie;
}

export const MovieResult: React.FC<MovieResultProps> = ({ movie }) => {
  const [showLabel, setShowLabel] = useState(false);

  return (
    <div className="flex h-[150px] w-[450px] bg-[#f1f1f1] p-2 border-2 border-gray-500">
      <div className="h-[125px] w-[125px] relative">
        {movie.Poster === "N/A" ? (
          <div className="w-full h-full flex items-center justify-center">
            No Poster
          </div>
        ) : (
          <Image
            unoptimized={true}
            src={movie.Poster}
            layout="fill"
            objectFit="contain"
          />
        )}
      </div>
      <div className="flex flex-col h-full justify-center space-y-2 ml-2">
        <span>Title: {movie.Title}</span>
        <span>Year of Release: {movie.Year}</span>
        <div className="flex space-x-2 items-center">
          <button
            className="px-2 py-1 border-gray-500 border rounded-lg w-fit hover:bg-gray-200"
            onClick={() => setShowLabel((showLabel) => !showLabel)}
          >
            Toggle Label
          </button>
          {showLabel ? <span>Clicked!</span> : null}
        </div>
      </div>
    </div>
  );
};
