import Image from 'next/image';
import { useRouter } from 'next/router';

import { Loader } from '@/components';

import { useMovieDetailQuery } from '../api/movieDetail';

export const FeatureMovieDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: movie, isLoading, isFetching } = useMovieDetailQuery({ id: id as string });

  if (isLoading || isFetching) {
    return <Loader />;
  }

  return (
    <div className="flex min-h-full min-w-full flex-col  pt-[72px] font-inter text-background-default">
      <div className="flex h-auto flex-col items-center justify-center px-4 py-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold">{movie && movie?.title}</h1>
          <p className="text-xl">{movie && movie?.tagline}</p>
        </div>
        <div className="mt-8">
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${movie && movie?.poster_path}`}
            alt={(movie && movie?.title) ?? 'movie-image'}
            className="border-1 min-h-full min-w-full border border-primary-gray object-contain"
            height={300}
            width={300}
          />
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Overview</h2>
          <p>{movie && movie?.overview}</p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Details</h2>
          <ul className="list-inside list-disc">
            <li>Release Date: {movie && movie?.release_date}</li>
            <li>Runtime: {movie && movie?.runtime} minutes</li>
            <li>Budget: ${movie && movie?.budget}</li>
            <li>Revenue: ${movie && movie?.revenue}</li>
            <li>Vote Average: {movie && movie?.vote_average}</li>
            <li>Vote Count: {movie && movie?.vote_count}</li>
          </ul>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold">Genres</h2>
          <ul className="list-inside list-disc">
            {movie && movie?.genres?.map((genre) => <li key={genre?.id}>{genre?.name}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
};
