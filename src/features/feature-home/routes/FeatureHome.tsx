import { Loader } from '@/components';

import { useNowPlayingMovies } from '../api/nowPlaying';
import { useTopRatedMoviesQuery } from '../api/topRated';
import { useUpcomingMoviesQuery } from '../api/upcoming';
import Banner from '../components/Banner';
import Row from '../components/Row';

export const FeatureHome = () => {
  const {
    data: topRatedMoviesData,
    isLoading: isLoadingTopRated,
    isFetching: isFetchingTopRated,
  } = useTopRatedMoviesQuery();
  const {
    data: upcomingMoviesData,
    isLoading: isLoadingUpcoming,
    isFetching: isFetchingUpcoming,
  } = useUpcomingMoviesQuery();
  const {
    data: nowPlayingMoviesData,
    isLoading: isLoadingNowPlaying,
    isFetching: isFetchingNowPlaying,
  } = useNowPlayingMovies();

  if (
    isLoadingTopRated ||
    isLoadingUpcoming ||
    isLoadingNowPlaying ||
    isFetchingTopRated ||
    isFetchingUpcoming ||
    isFetchingNowPlaying
  ) {
    return <Loader size="lg" />;
  }
  return (
    <div className="flex min-h-full min-w-full flex-col  font-trial text-background-default">
      {/* Banner section */}
      <Banner data={nowPlayingMoviesData?.results} />
      {/* Movie Card  Section */}
      <div className=" flex flex-col gap-s32 px-s16 py-[40px]">
        <Row title="Top Rated Movies" data={topRatedMoviesData?.results} />
        <Row title="Upcoming Movies" data={upcomingMoviesData?.results} />
      </div>
    </div>
  );
};
