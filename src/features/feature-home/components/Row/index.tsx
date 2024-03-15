import Image from 'next/image';
import { useRouter } from 'next/router';

import { ResultsDataType } from '../../types/movies';

interface RowProps {
  title: string;
  data: ResultsDataType[] | undefined;
}

const Row = ({ title, data }: RowProps) => {
  const router = useRouter();
  return (
    <>
      <div className="text-[40px]">{title}</div>
      <div className="no-scrollbar  flex gap-s18 overflow-y-hidden">
        {data &&
          data?.map((d: ResultsDataType) => (
            <div
              className="min-w-[150px] cursor-pointer  text-center font-inter  transition-transform hover:scale-110"
              key={d?.id}
            >
              <Image
                onClick={() => router.push(`/${d?.id}`)}
                alt="movie-poster"
                className="min-h-full min-w-full object-contain"
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${d?.poster_path}`}
                height={100}
                width={100}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default Row;
