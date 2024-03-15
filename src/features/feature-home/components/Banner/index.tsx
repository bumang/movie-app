import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';

import Button from '@/components/ui/Button';
import { truncateWords } from '@/utils/truncateStr';

import { ResultsDataType } from '../../types/movies';

interface BannerProps {
  data: ResultsDataType[] | undefined;
}

const Banner = ({ data }: BannerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageRefs = useRef([]);
  const textRef = useRef([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % (data?.length || 1));
    }, 5500); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [data]);

  useEffect(() => {
    if (data) {
      const tl = gsap.timeline({
        onComplete: () => {
          // Reset the position of the current image to ensure it's ready for the next animation
          gsap.set(imageRefs.current[currentIndex], { x: '0%' });
        },
      });

      // Animate the current image to slide out to the left
      tl.to(imageRefs.current[currentIndex], {
        x: '-100%',
        duration: 3, // Increase duration for a slower animation
        ease: 'power1.inOut',
      });

      // Animate the next image to slide in from the right
      tl.to(imageRefs.current[(currentIndex + 1) % data.length], {
        x: '0%',
        duration: 3, // Increase duration for a slower animation
        ease: 'power2.in',
      });

      // Animate the text to appear from below and disappear slowly
      tl.fromTo(
        textRef.current,
        { y: '100%', opacity: 0, duration: 8 },
        { y: '0%', opacity: 1, duration: 1, delay: 0, ease: 'power1.inOut' } // Increase duration for a slower animation
      );

      // Animate the text to disappear slowly after it has appeared
      tl.to(textRef.current, {
        y: '15%',
        opacity: 0,
        duration: 1.5, // Adjust duration for smooth disappearing
        ease: 'back.out',
        delay: 3, // Delay to start disappearing after the text has appeared
      });
    }
  }, [currentIndex, data]);

  return (
    <div className="relative  m-auto flex h-[100vh] w-[100%] justify-center bg-primary-darkGray">
      <div className="image-slider absolute h-full w-full overflow-hidden">
        {data &&
          data.map((item, index) => (
            <div
              key={item?.id}
              ref={imageRefs.current[index]}
              // ref={(el) => (imageRefs.current[index] = el)}
              className={`absolute h-full w-full transition-opacity duration-500 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <Image
                alt="movie-banner"
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}${item?.backdrop_path}`}
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          ))}
      </div>
      <div
        className="absolute bottom-[10%] left-0  z-20 px-16 transition-opacity duration-500 ease-in-out"
        ref={textRef.current[currentIndex]}
      >
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
