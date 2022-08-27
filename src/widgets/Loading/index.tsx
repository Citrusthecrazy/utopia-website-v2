import React from "react";

const Loading = () => {
  return (
    <div className="container mx-auto w-screen h-screen flex flex-col justify-center gap-8 px-4">
      <div className="flex flex-col items-center justify-start gap-4">
        <h1 className="font-bold text-3xl text-center">Učitavanje...</h1>
      </div>
    </div>
  );
};

export default Loading;
