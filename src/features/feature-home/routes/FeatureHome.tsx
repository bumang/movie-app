import { useTopRatedMoviesQuery } from '../api/topRated';
import { useUpcomingMoviesQuery } from '../api/upcoming';
import Banner from '../components/Banner';
import Row from '../components/Row';

export const FeatureHome = () => {
  const { data: topRatedMoviesData } = useTopRatedMoviesQuery();
  const { data: upcomingMoviesData } = useUpcomingMoviesQuery();

  return (
    <div className="flex min-h-full min-w-full flex-col  font-trial text-background-default">
      {/* Banner section */}
      <Banner
        data={
          topRatedMoviesData?.results[
            Math.floor(Math.random() * topRatedMoviesData.results.length - 1)
          ]
        }
      />
      {/* Movie Card  Section */}
      <div className="flex flex-col gap-s32 px-s16 py-[40px]">
        <Row title="Top Rated Movies" data={topRatedMoviesData} />
        <Row title="Upcoming Movies" data={upcomingMoviesData} />
      </div>
    </div>
  );
};
