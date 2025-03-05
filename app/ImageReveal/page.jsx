'use client';
import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ImageReveal from '@/components/ImageReveal';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Page = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.utils.toArray('.image-container').forEach((revealContainer) => {
      const q = gsap.utils.selector(revealContainer);
      gsap.from(q('.imageReveal'), {
        x: (i) => (i + 1) * 1200,
        scale: 4,
        y: 60,
        duration: 2.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: revealContainer,
          start: 'top bottom',
          toggleActions: 'play none none reverse',
        },
      });
    });
  });

  return (
    <div className='flex flex-col gap-20 bg-neutral-950 py-20 px-20'>
      {[1, 2, 3].map((num) => (
        <React.Fragment key={num}>
          <ImageReveal imgNum={num} position='place-self-end' />
          <ImageReveal imgNum={num} position='place-self-center' />
          <ImageReveal imgNum={num} position='place-self-right' />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Page;
