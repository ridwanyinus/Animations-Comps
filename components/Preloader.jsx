'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Preloader = () => {
  // Create refs for the loader elements
  const loader1Ref = useRef(null);
  const loader2Ref = useRef(null);
  const counter3Ref = useRef(null);
  const counter2Ref = useRef(null);
  const counter1Ref = useRef(null);

  useEffect(() => {
    // Populate counter-3 with numbers
    const counter3 = counter3Ref.current;

    if (counter3) {
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
          const div = document.createElement('div');
          div.classList.add('num');
          div.textContent = j;
          counter3.appendChild(div);
        }
      }

      const finalDiv = document.createElement('div');
      finalDiv.classList.add('num');
      finalDiv.textContent = 0;
      counter3.appendChild(finalDiv);
    }

    // Animation function
    function animate(counter, duration, delay = 0) {
      if (!counter) return;

      const numHeight = counter.querySelector('.num')?.offsetHeight;
      if (!numHeight) return;

      const totalDistance = (counter.querySelectorAll('.num').length - 1) * numHeight;

      gsap.to(counter, {
        y: -totalDistance,
        duration: duration,
        delay: delay,
        ease: 'power2.inOut',
      });
    }

    counter3 && animate(counter3, 5);
    counter2Ref.current && animate(counter2Ref.current, 6);
    counter1Ref.current && animate(counter1Ref.current, 2, 4);

    gsap.to(loader1Ref.current, {
      width: '200px',
      duration: 6,
      ease: 'power2.inOut',
    });

    gsap.to(loader2Ref.current, {
      width: '100px',
      delay: 1.9,
      duration: 2,
      ease: 'power2.inOut',
    });

    // Additional animations
    gsap.to('.digit', {
      top: '-150px',
      stagger: {
        amount: 0.25,
      },
      delay: 6,
      duration: 1,
      ease: 'power4.inOut',
    });

    gsap.to('.loader', {
      backgroundColor: 'transparent',
      delay: 6,
      duration: 0.1,
    });

    gsap.to('.loader-1', {
      rotate: 90,
      y: -50,
      duration: 0.5,
      delay: 6,
    });

    gsap.to(
      '.loader-2',
      {
        x: -75,
        y: 75,
        duration: 0.5,
      },
      '<',
    );

    gsap.to('.loader', {
      scale: 40,
      duration: 1,
      delay: 7,
      ease: 'power2.inOut',
    });

    gsap.to('.loader', {
      rotate: 40,
      y: 500,
      x: 2000,
      duration: 1,
      delay: 7,
      ease: 'power2.inOut',
    });

    gsap.to('.loading-screen', {
      opacity: 0,
      duration: 0.5,
      delay: 7.5,
      ease: 'power2.inOut',
    });

    gsap.to('h1', 1.5, {
      delay: 7,
      y: -90,
      ease: 'power4.inOut',
      stagger: {
        amount: 0.1,
      },
    });
    const loader1 = loader1Ref.current;
    const loader2 = loader2Ref.current;

    // Clean up animations on unmount
    return () => {
      gsap.killTweensOf(loader1);
      gsap.killTweensOf(loader2);
      gsap.killTweensOf('.digit');
      gsap.killTweensOf('.loader');
      gsap.killTweensOf('.loader-1');
      gsap.killTweensOf('.loader-2');
      gsap.killTweensOf('.loading-screen');
      gsap.killTweensOf('h1');
    };
  }, []);

  return (
    <div className='relative max-w-screen h-screen font-sans overflow-hidden'>
      <div className='flex text-white items-center justify-center px-6 absolute inset-0'>
        <h1 className='text-3xl lg:text-5xl uppercase font-normal text-center'>
          Welcome to Fight Club! <br />
          <span className='w-[50ch] inline-flex sm:text-lg lg:text-3xl text-neutral-400'>The first rule of Fight Club is: you do not talk about Fight Club.</span>
        </h1>
      </div>

      <div className='loading-screen absolute top-0 left-0 w-full h-full bg-black text-white pointer-events-none'>
        <div className='loader absolute top-1/2 left-1/2 w-[300px] h-[50px] -translate-x-1/2 -translate-y-1/2 flex bg-[#505050]'>
          <div ref={loader1Ref} className='loader-1 bar relative bg-white w-0 h-[50px]' />
          <div ref={loader2Ref} className='loader-2 bar relative bg-white w-0 h-[50px]' />
        </div>

        <div className='counter fixed left-[50px] bottom-[50px] flex h-[100px] text-[100px] leading-[102px] font-normal' style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100px, 0 100px)' }}>
          <div ref={counter1Ref} className='counter-1 digit relative -top-[15px]'>
            <div className='num'>0</div>
            <div className='num relative -right-[10px]'>1</div>
          </div>
          <div ref={counter2Ref} className='counter-2 digit relative -top-[15px]'>
            <div className='num relative -right-[10px]'>0</div>
            <div className='num'>1</div>
            <div className='num'>2</div>
            <div className='num'>3</div>
            <div className='num'>4</div>
            <div className='num'>5</div>
            <div className='num'>6</div>
            <div className='num'>7</div>
            <div className='num'>8</div>
            <div className='num'>9</div>
            <div className='num'>0</div>
          </div>
          <div ref={counter3Ref} className='counter-3 digit relative -top-[15px]'>
            {/* This will be populated by JS */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
