import React from 'react';
import Image from 'next/image';

import CustomImageLoader from '@/components/ui/ImageLoader';

interface LoginLayoutProps {
  children: React.ReactNode;
}

const LoginHeader = () => (
  <div className="w-full">
    <div className="flex h-[60px]  content-between items-center">
      <div className="h-full cursor-pointer">
        <Image
          loader={CustomImageLoader}
          alt="logo"
          src={`${process.env.NEXT_PUBLIC_PATH_PREFIX || ''}/logo.svg`}
          height={50}
          width={50}
        />
      </div>
    </div>
  </div>
);

export const LoginLayout = ({ children }: LoginLayoutProps) => (
  <div className="flex h-[100vh]  justify-center bg-primary-black">
    <div className="w-full max-w-[1170px]  p-s24">
      <div className="flex flex-col gap-[80px]">
        <div>
          <LoginHeader />
        </div>
        <div>{children}</div>
      </div>
    </div>
  </div>
);
