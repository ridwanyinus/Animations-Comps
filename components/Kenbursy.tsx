'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import kenImg from '@/public/category2.jpeg';

const KenburnsSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [{ src: kenImg, height: 100 }];

  const FADE_DURATION = 1500;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    });
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='container mt-12'>
      <div className='relative  w-full overflow-hidden'>
        {images.map((image, index) => (
          <div
            key={index}
            className={`transition-opacity duration-[${FADE_DURATION}ms] ease-in-out`}
            style={{
              opacity: currentImageIndex === index ? 1 : 0,
            }}>
            <div style={{ position: 'relative', width: '100%', height: `${image.height}vh`, overflow: 'hidden' }}>
              <Image src={image.src} alt='a young cute lady on bike' loading='eager' style={{ width: '100%', height: '100%', objectFit: 'cover' }} className='kenburns-animation' />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KenburnsSlider;
