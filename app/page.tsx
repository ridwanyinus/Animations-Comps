import React from "react";
import dynamic from "next/dynamic";

const Wow = dynamic(() => import("@/components/Wow"), { ssr: false });
const Cursor = dynamic(() => import("@/components/Cursor"), { ssr: false });

const page = () => {
  return (
    <div className="relative min-h-screen w-full bg-black">
      <Cursor />
      <Wow />
    </div>
  );
};

export default page;
