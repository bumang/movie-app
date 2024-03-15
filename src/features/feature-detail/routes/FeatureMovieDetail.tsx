import { useRouter } from 'next/router';

import { Loader } from '@/components';

import { useMovieDetailQuery } from '../api/movieDetail';
import MovieDetailLeft from '../components/MovieDetailLeft';
import MovieDetailRight from '../components/MovieDetailRIght';

export const FeatureMovieDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data: movie, isLoading, isFetching } = useMovieDetailQuery({ id: id as string });

  if (isLoading || isFetching) {
    return <Loader size="lg" />;
  }

  return (
    <div className="m-[0 auto] flex min-h-full w-[80%] min-w-full flex-col pt-[70px]  font-inter text-background-default">
      <div className="m-auto flex w-[90%] flex-row gap-8 ">
        <MovieDetailLeft movie={movie} />
        <MovieDetailRight movie={movie} />
      </div>
    </div>
  );
};
