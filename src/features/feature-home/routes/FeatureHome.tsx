import { Loader } from '@/components';

import { useTestQuery } from '../api';

export const FeatureHome = () => {
  const { isLoading } = useTestQuery();

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="flex min-h-full min-w-full flex-col">
      <div className="m-auto flex min-h-full w-fit flex-auto flex-col items-start justify-center leading-heavy" />
    </div>
  );
};
