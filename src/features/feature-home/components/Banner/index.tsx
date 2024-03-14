import React from 'react';
import Image from 'next/image';

import Button from '@/components/ui/Button';
import CustomImageLoader from '@/components/ui/ImageLoader';
import { truncateWords } from '@/utils/truncateStr';

interface BannerProps {
  data: any;
}

const Banner = ({ data }: BannerProps) => {
  return (
    <div className="relative m-auto flex h-[100vh] w-[100%] justify-center bg-primary-darkGray">
      <Image
        loader={CustomImageLoader}
        alt="movie-banner"
        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${data?.backdrop_path}`}
        fill
      />
      <div className="absolute bottom-[10%] left-0 z-20 px-16">
        <div className="[text-shadow:0px 1px 24px -1px rgba(255, 255, 255, 0.25)] text-[88px]">
          {data?.title || data?.name || data?.original_name}
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
          {data && truncateWords(data?.overview, 42)}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 z-10 h-[50%] w-full bg-gradient-custom " />
    </div>
  );
};

export default Banner;
