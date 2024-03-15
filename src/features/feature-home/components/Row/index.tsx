import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { cn } from '@/utils/cn';

import { ResultsDataType } from '../../types/movies';

interface RowProps {
  title: string;
  data: ResultsDataType[] | undefined;
}

const Row = ({ title, data }: RowProps) => {
  const router = useRouter();
  const [isLoading, setLoading] = useState(true);

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
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${d?.poster_path}`}
                height={100}
                width={100}
                className={cn(
                  'min-h-full min-w-full object-contain duration-700 ease-in-out',
                  isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
                )}
                onLoadingComplete={() => setLoading(false)}
              />
            </div>
          ))}
      </div>
    </>
  );
};

export default Row;
