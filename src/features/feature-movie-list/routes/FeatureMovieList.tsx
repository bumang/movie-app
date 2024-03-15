import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { Loader, Select } from '@/components';
import { SelectOption } from '@/components/ui/Select/select.types';
import { ResultsDataType } from '@/features/feature-home/types/movies';
import { cn } from '@/utils/cn';

import { useAllMoviesQuery } from '../api/movieList';

export const FeatureMovieList = () => {
  const router = useRouter();
  const {
    data,
    isLoading: allMoviesIsLoading,
    isFetching: allMoviesIsFetching,
  } = useAllMoviesQuery({
    with_genres: router.query.with_genres as string,
    sort_by: router?.query?.sort_by as string,
  });
  const [isLoading, setLoading] = useState(true);

  if (allMoviesIsLoading || allMoviesIsFetching) {
    return <Loader size="lg" />;
  }

  const sortFilterOptions: SelectOption[] = [
    { label: 'Release Date', value: 'primary_release_date.asc' },
    { label: 'Rating', value: 'vote_average.asc' },
    // { label: 'Time Duration', value: 'time_duration.asc' },
  ];

  return (
    <div className="flex h-[100%] min-h-full w-[80%] min-w-full flex-col  pt-[80px]  font-inter text-background-default">
      <div className="m-auto  flex h-full w-[90%] flex-col gap-8 ">
        <div className="flex min-w-full justify-between border-b-3 border-b-gray-800">
          <h1 className="font-trial text-7xl font-bold text-orange-300">Movie List</h1>
          <div className="flex gap-4">
            <div className="flex-1 pt-7">Sort by:</div>
            <div>
              <Select
                testId=""
                isClearable
                options={sortFilterOptions}
                onChange={(newValue) => {
                  if (newValue === null) {
                    router.push({
                      query: {},
                    });
                  }
                  if (newValue && 'value' in newValue) {
                    router.push({
                      query: {
                        sort_by: newValue?.value,
                      },
                    });
                  }
                }}
                className="pt-5"
              />
            </div>
          </div>
        </div>
        <div className="no-scrollbar  flex flex-wrap  items-start justify-evenly gap-[64px] ">
          {data &&
            data?.results?.map((d: ResultsDataType) => (
              <div
                className="w-[300px] cursor-pointer p-[2%] text-center font-inter transition-transform hover:scale-110"
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
