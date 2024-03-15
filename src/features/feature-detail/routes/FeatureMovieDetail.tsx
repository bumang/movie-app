import { useRouter } from 'next/router';

import { Loader } from '@/components';

import { useMovieCastQuery } from '../api/movieCast';
import { useMovieDetailQuery } from '../api/movieDetail';
import MovieDetailLeft from '../components/MovieDetailLeft';
import MovieDetailRight from '../components/MovieDetailRIght';

export const FeatureMovieDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const {
    data: movie,
    isLoading: isLoadingMovie,
    isFetching: isFetchingMovie,
  } = useMovieDetailQuery({ id: id as string });
  const {
    data: cast,
    isLoading: isLoadingCast,
    isFetching: isFetchingCast,
  } = useMovieCastQuery({ id: id as string });

  if (isLoadingMovie || isFetchingMovie || isLoadingCast || isFetchingCast) {
    return <Loader size="lg" />;
  }

  return (
    <div className="m-[0 auto] flex min-h-full w-[80%] min-w-full flex-col pt-[80px]  font-inter text-background-default">
      <div className="m-auto mb-[20px] flex w-[90%] flex-row gap-8 ">
        <MovieDetailLeft movie={movie} />
        <MovieDetailRight
          movie={movie}
          cast={cast?.cast
            ?.filter((d) => d.known_for_department === 'Acting')
            .sort((a, b) => b.popularity - a.popularity)
            .slice(0, 10)}
        />
      </div>
    </div>
  );
};
