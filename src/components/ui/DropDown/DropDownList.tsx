import { Loader } from '../Loader';

interface DropDownListProps {
  children: React.ReactNode;
  isLoading?: boolean;
}

export const DropDownList = ({ children, isLoading }: DropDownListProps) => {
  if (isLoading) {
    return (
      <div
        className="absolute left-0 top-0 z-40 flex h-[242px] w-44 items-center divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
        style={{ top: '110%', left: '30%', transform: 'translateX(-80%)' }}
      >
        <Loader />
      </div>
    );
  }
  return (
    <div
      className="absolute left-0 top-0 z-40 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
      style={{ top: '110%', left: '30%', transform: 'translateX(-80%)' }}
    >
      {children}
    </div>
  );
};
