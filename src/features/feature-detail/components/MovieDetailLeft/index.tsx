import Image from 'next/image';

import { MovieDetailComponentProps } from '../../types/props';

const MovieDetailLeft = ({ movie }: MovieDetailComponentProps) => {
  return (
    <div className="flex w-[30%] flex-col items-center justify-normal gap-8 border-2  border-whiteAlpha-400 px-4 py-4">
      <div className="mt-8">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${movie && movie?.poster_path}`}
          alt={(movie && movie?.title) ?? 'movie-image'}
          className="border-1 min-h-full min-w-full border border-primary-gray object-contain"
          height={200}
          width={250}
        />
      </div>
      <div className="m-8 flex flex-col gap-4  text-center">
        <h2 className=" text-2xl font-bold text-orange-300">Genres</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {movie &&
            movie?.genres?.map((genre) => (
              <div
                key={genre?.id}
                className="rounded-md border border-gray-600 px-4 py-2 text-text-default"
              >
                {genre?.name}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieDetailLeft;
