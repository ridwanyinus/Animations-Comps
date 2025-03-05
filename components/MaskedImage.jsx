"use client";
import React, { useRef, useLayoutEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

const MaskedImage = () => {
  // Initialize refs with proper types
  const container = useRef(null); // Reference for the container element
  const panel = useRef([]); // Reference array for panel elements

  // Use useLayoutEffect to handle animations after the DOM has been updated
  useLayoutEffect(() => {
    // Create a GSAP context with the container as the scope
    const ctx = gsap.context(() => {
      // Set default ScrollTrigger settings
      ScrollTrigger.defaults({
        toggleActions: "restart pause resume pause",
        scroller: container.current, // Use container as scroller
      });

      // Animate each panel element
      gsap.utils.toArray(panel.current).forEach((el, index) => {
        gsap.to(el, {
          backgroundPosition: "-100px",
          duration: 3,
          scrollTrigger: {
            trigger: el, // Use the current panel element as trigger
            toggleActions: "play reverse play reverse",
          },
        });

        // Animate corresponding bullet elements
        gsap.to(`.bullet-${index + 1}`, {
          scale: 1.8,
          scrollTrigger: {
            trigger: el, // Use the current panel element as trigger
            toggleActions: "play reverse play reverse",
          },
        });
      });
    }, container.current);

    // Clean up GSAP context on component unmount
    return () => ctx.revert();
  }, []); // Empty dependency array ensures effect runs once on mount

  // Array of slides with their respective properties
  const slides = [
    { title: "Day 1", place: "Unknown Haven", color: "text-red-600", img: "image1" },
    { title: "Day 2", place: "Gotham", color: "text-green-600", img: "image2" },
    { title: "Day 3", place: "Gotham Haven", color: "text-orange-600", img: "image3" },
  ];

  // Function to add elements to panel refs array
  const addToRef = (el) => {
    if (el && !panel.current.includes(el)) {
      panel.current.push(el);
    }
  };

  return (
    <div ref={container} className="container bg-[#f2f2f2]">
      <div className="fixed flex flex-col gap-12 items-center justify-center h-screen w-[10%]">
        {slides.map((bullet, index) => (
          <div key={index} className={`${bullet.img} bullet-${index + 1} h-12 w-12 rounded-full bg-cover`}></div>
        ))}
      </div>
      <div className="grid gap-y-4">
        {slides.map((slide) => (
          <section key={slide.title} className="h-screen flex  justify-between snap-start">
            <div className="w-[35%]">
              <div className="flex leading-8 flex-col items-center justify-center h-full">
                <h2 className={`text-2xl ${slide.color} font-bold`}>{slide.title}</h2>
                <h1 className={`text-[2rem] ${slide.color}`}>{slide.place}</h1>
              </div>
            </div>
            <div className="w-[65%]">
              <div ref={addToRef} className={`${slide.img} bg-cover  mask`}></div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default MaskedImage;
