import React from 'react';

import { MovieDetailComponentProps } from '../../types/props';

const MovieDetailRight = ({ movie }: MovieDetailComponentProps) => {
  return (
    <div className="flex w-[70%] flex-col items-start justify-normal border-2 border-whiteAlpha-400 px-8 py-8">
      <div className="flex flex-col gap-4 text-start">
        <h1 className="font-trial text-8xl font-bold text-orange-300">{movie && movie?.title}</h1>
        <p className="text-xl">{movie && movie?.tagline}</p>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-orange-300">Overview</h2>
        <p className="text-lg">{movie && movie?.overview}</p>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-orange-300">Details</h2>
        <div className="flex flex-wrap gap-6">
          <div className="w-[48%]">
            <div className="mb-2 text-lg font-semibold  text-orange-100">Release Date:</div>
            <div className="text-xl font-medium">{movie && movie?.release_date}</div>
          </div>
          <div className="w-[48%]">
            <div className="mb-2 text-lg font-semibold text-orange-100">Runtime:</div>
            <div className="text-xl font-medium">{movie && movie?.runtime} minutes</div>
          </div>
          <div className="w-[48%]">
            <div className="mb-2 text-lg font-semibold text-orange-100">Budget:</div>
            <div className="text-xl font-medium">${movie && movie?.budget.toLocaleString()}</div>
          </div>
          <div className="w-[48%]">
            <div className="mb-2 text-lg font-semibold text-orange-100">Revenue:</div>
            <div className="text-xl font-medium">${movie && movie?.revenue.toLocaleString()}</div>
          </div>
          <div className="w-[48%]">
            <div className="mb-2 text-lg font-semibold text-orange-100">Vote Average:</div>
            <div className="text-xl font-medium">{movie && movie?.vote_average}</div>
          </div>
          <div className="w-[48%]">
            <div className="mb-2 text-lg font-semibold text-orange-100">Vote Count:</div>
            <div className="text-xl font-medium">{movie && movie?.vote_count}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetailRight;
