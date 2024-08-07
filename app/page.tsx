import React from "react";
import dynamic from "next/dynamic";

const Wow = dynamic(() => import("@/components/Wow"), { ssr: false });
const Cursor = dynamic(() => import("@/components/Cursor"), { ssr: false });

const page = () => {
  return (
    <div className="relative min-h-screen w-full bg-black">
      <div className="h-screen bg-black text-center text-white pt-4"> just here to test mouse movement 🤗 </div>
      <Cursor />
      <Wow />
    </div>
  );
};

export default page;
