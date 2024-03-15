import { FeatureMovieDetail } from '@/features/feature-detail';
import { MovieDetailPageLayout } from '@/layouts';

const MovieDetail = () => <FeatureMovieDetail />;

MovieDetail.getLayout = (page: React.ReactElement) => (
  <MovieDetailPageLayout>{page}</MovieDetailPageLayout>
);
export default MovieDetail;
