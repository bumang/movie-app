import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import Button from '@/components/ui/Button';
import { truncateWords } from '@/utils/truncateStr';

import { ResultsDataType } from '../../types/movies';

interface BannerProps {
  data: ResultsDataType[] | undefined;
}

const Banner = ({ data }: BannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      data && setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [data]);

  return (
    <div className="relative m-auto flex h-[100vh] w-[100%] justify-center bg-primary-darkGray">
      <div className="image-slider absolute h-full w-full overflow-hidden">
        {data &&
          data?.map((item, index) => (
            <div
              key={item?.id}
              className={`absolute h-full w-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'animate-slideIn opacity-100' : 'opacity-0'}`}
            >
              <Image
                alt="movie-banner"
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item?.backdrop_path}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
      </div>
      <div className="absolute bottom-[10%] left-0 z-20 animate-fadeInFromBelow px-16 transition-opacity duration-500 ease-in-out">
        <div className="[text-shadow:0px 1px 24px -1px rgba(255, 255, 255, 0.25)] text-[88px]">
          {(data && data[currentIndex]?.title) ||
            (data && data[currentIndex]?.name) ||
            (data && data[currentIndex]?.original_name)}
        </div>
        <div className="flex w-[20%] gap-s8">
          <div>
            <Button size={40} className="font-inter text-black" variant="filled-white">
              Play
            </Button>
          </div>
          <div>
            <Button size={40} className="font-inter" variant="outline-white">
              My List
            </Button>
          </div>
        </div>
        <div className="w-[50%] pt-[30px] font-inter text-[20px]">
          {data && truncateWords(data && data[currentIndex]?.overview, 100)}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-10 h-[50%] w-full bg-gradient-custom " />
    </div>
  );
};

export default Banner;
