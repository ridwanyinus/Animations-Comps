import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
// const Wow = dynamic(() => import("@/components/Wow"), { ssr: false });
// const Cursor = dynamic(() => import("@/components/Cursor"), { ssr: false });

const page = () => {
  return (
    <div className="relative min-h-screen w-full bg-black">
      <Link href="/cursor" className="text-white text-3xl bg-neutral-700 p-4 my-4 text-center block ">
        Cursor animation
      </Link>
      <Link href="/wowjs" className="text-white text-3xl bg-neutral-700 p-4 text-center block text-center">
        wowjs animation
      </Link>
      <Link href="/rippleEffect" className="mt-4 text-white text-3xl bg-neutral-700 p-4 text-center block text-center">
        ripple animation
      </Link>
    </div>
  );
};

export default page;
