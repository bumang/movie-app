import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Loader } from '@/components';
import { ResultsDataType } from '@/features/feature-home/types/movies';
import { cn } from '@/utils/cn';

import { useAllMoviesQuery } from '../api/movieList';

export const FeatureMovieList = () => {
  const router = useRouter();
  const {
    data,
    isLoading: allMoviesIsLoading,
    isFetching: allMoviesIsFetching,
  } = useAllMoviesQuery({ with_genres: (router.query.with_genres as string) ?? '' });
  const [isLoading, setLoading] = useState(true);

  if (allMoviesIsLoading || allMoviesIsFetching) {
    return <Loader size="lg" />;
  }

  return (
    <div className="flex h-[100%] min-h-full w-[80%] min-w-full flex-col  pt-[80px]  font-inter text-background-default">
      <div className="m-auto  flex h-full w-[90%] flex-col gap-8 ">
        <h1 className="border-b-3 border-b-gray-800  font-trial text-7xl font-bold text-orange-300">
          Movie List
        </h1>
        <div className="no-scrollbar  flex flex-wrap justify-start gap-[64px] ">
          {data &&
            data?.results?.map((d: ResultsDataType) => (
              <div
                className="min-w-[300px] cursor-pointer pl-[2%] pt-[10px]  text-center font-inter  transition-transform hover:scale-110"
                key={d?.id}
              >
                <Image
                  onClick={() => router.push(`/${d?.id}`)}
                  alt="movie-poster"
                  src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${d?.poster_path}`}
                  height={100}
                  width={100}
                  className={cn(
                    'min-h-full min-w-full object-contain duration-700 ease-in-out',
                    isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
                  )}
                  onLoadingComplete={() => setLoading(false)}
                />
                <div className="flex w-[280px] content-center  text-2xl font-bold text-orange-300">
                  {d?.title}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
