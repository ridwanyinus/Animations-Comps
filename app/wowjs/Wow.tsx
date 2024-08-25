"use client";
import React from "react";
import { useEffect } from "react";
import WOW from "wowjs";
const Wow = () => {
  useEffect(() => {
    new WOW.WOW().init();
  }, []);
  return (
    <div className="bg-green-950 h-full w-full p-20">
      <section className="min-h-screen w-full grid grid-cols-3 place-items-center gap-12 py-12 ">
        <div data-wow-duration="0.8s" data-wow-delay="0.2s" className="wow animate__animated animate__fadeInLeft bg-white w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="0.8s" data-wow-delay="0.2s" className="wow animate__animated animate__fadeInLeft bg-white w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="0.8s" data-wow-delay="0.2s" className="wow animate__animated animate__fadeInLeft bg-white w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="0.8s" data-wow-delay="0.2s" className="wow animate__animated animate__fadeInLeft bg-white w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="0.8s" data-wow-delay="0.2s" className="wow animate__animated animate__fadeInLeft bg-white w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="0.8s" data-wow-delay="0.2s" className="wow animate__animated animate__fadeInLeft bg-white w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="0.8s" data-wow-delay="0.2s" className="wow animate__animated animate__fadeInLeft bg-white w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="0.8s" data-wow-delay="0.2s" className="wow animate__animated animate__fadeInLeft bg-white w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="0.8s" data-wow-delay="0.2s" className="wow animate__animated animate__fadeInLeft bg-white w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="0.8s" data-wow-delay="0.2s" className="wow animate__animated animate__fadeInLeft bg-white w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="0.8s" data-wow-delay="0.2s" className="wow animate__animated animate__fadeInLeft bg-white w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="0.8s" data-wow-delay="0.2s" className="wow animate__animated animate__fadeInLeft bg-white w-[10rem] h-[10rem]"></div>
      </section>

      <section className="min-h-screen w-full grid grid-cols-3 py-12 place-items-center gap-12 bg-green-950">
        <div data-wow-duration="1.5s" className="wow animate__animated animate__fadeInRight bg-black w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="1.5s" className="wow animate__animated animate__fadeInRight bg-black w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="1.5s" className="wow animate__animated animate__fadeInRight bg-black w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="1.5s" className="wow animate__animated animate__fadeInRight bg-black w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="1.5s" className="wow animate__animated animate__fadeInRight bg-black w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="1.5s" className="wow animate__animated animate__fadeInRight bg-black w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="1.5s" className="wow animate__animated animate__fadeInRight bg-black w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="1.5s" className="wow animate__animated animate__fadeInRight bg-black w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="1.5s" className="wow animate__animated animate__fadeInRight bg-black w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="1.5s" className="wow animate__animated animate__fadeInRight bg-black w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="1.5s" className="wow animate__animated animate__fadeInRight bg-black w-[10rem] h-[10rem]"></div>
        <div data-wow-duration="1.5s" className="wow animate__animated animate__fadeInRight bg-black w-[10rem] h-[10rem]"></div>
      </section>
    </div>
  );
};

export default Wow;
