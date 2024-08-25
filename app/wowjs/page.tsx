import React from "react";
import dynamic from "next/dynamic";
const Wow = dynamic(() => import("./Wow"), { ssr: false });

const page = () => {
  return (
    <div>
      <Wow />
    </div>
  );
};

export default page;
