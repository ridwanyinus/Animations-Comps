import React from "react";
import dynamic from "next/dynamic";
const Cursor = dynamic(() => import("./Cursor"), { ssr: false });

const page = () => {
  return (
    <div>
      <Cursor />
    </div>
  );
};

export default page;
