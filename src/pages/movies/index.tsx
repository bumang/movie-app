import { FeatureMovieList } from '@/features/feature-movie-list';
import { MovieListPageLayout } from '@/layouts';

const MovieList = () => <FeatureMovieList />;

MovieList.getLayout = (page: React.ReactElement) => (
  <MovieListPageLayout>{page}</MovieListPageLayout>
);
export default MovieList;
