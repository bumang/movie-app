import { FeatureMovieDetail } from '@/features/feature-detail';
import { MovieDetailPageLayout } from '@/layouts';

const Home = () => <FeatureMovieDetail />;

Home.getLayout = (page: React.ReactElement) => (
  <MovieDetailPageLayout>{page}</MovieDetailPageLayout>
);
export default Home;
