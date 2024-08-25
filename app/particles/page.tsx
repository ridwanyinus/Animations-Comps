import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";
const ParticlesEffect = dynamic(() => import("@/components/ParticlesEffect"), { ssr: false });
const NasaEffects = dynamic(() => import("@/components/NasaEffects"), { ssr: false });

const page = () => {
  return (
    <div className="relative h-screen w-full grid  items-start place-items-center">
      <ParticlesEffect />
      <div className="absolute  flex  flex-col justify-center items-center  bg-white py-1 w-1/2 mx-auto ">
        <Link rel="stylesheet" href="https://github.com/ridwanyinus/Animations-Comps" className="flex py-3 gap-x-1 hover:underline">
          Link to github repo <FaGithub size={20} />
        </Link>
      </div>
      <NasaEffects />
    </div>
  );
};

export default page;
