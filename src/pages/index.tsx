import { FeatureHome } from '@/features/feature-home';
import { HomePageLayout } from '@/layouts/landing';

const Home = () => <FeatureHome />;

Home.getLayout = (page: React.ReactElement) => <HomePageLayout>{page}</HomePageLayout>;
export default Home;
