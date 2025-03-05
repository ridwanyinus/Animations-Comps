'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import KenImg from '@/public/slider-3.jpeg';

const KenBurnsGSAPEffect = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;

    gsap.set(image, { scale: 1 });

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(image, {
      scale: 1.1,
      rotation: 0.5,
      duration: 15,
      ease: 'none',
    }).to(image, {
      scale: 1,
      rotation: 0,
      duration: 15,
      ease: 'none',
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className='w-full h-[700px] overflow-hidden' style={{ overflowX: 'hidden' }}>
      <Image ref={imageRef} className='' style={{ transformOrigin: 'right center', overflow: 'hidden' }} src={KenImg} alt='' />
    </div>
  );
};

export default KenBurnsGSAPEffect;
