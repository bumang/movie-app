import { TopHeader } from '@/components';

interface MovieDetailPageLayoutProps {
  children: React.ReactNode;
}

export const MovieDetailPageLayout = ({ children }: MovieDetailPageLayoutProps) => {
  return (
    <div className="min-w-screen  relative min-h-screen overflow-hidden">
      <div className="relative h-screen justify-center overflow-x-hidden">
        <div className="fixed top-0 z-50 h-[80px] w-full sm:h-[72px] ">
          <TopHeader />
        </div>
        {children}
      </div>
    </div>
  );
};
