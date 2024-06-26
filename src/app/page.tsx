"use client"

import { useState } from "react";

const Page = () => {
  const [count, setCount] = useState(0);
  const handleClickButton = () => {
    setCount(count+1);
  }
  return (
    <div className="w-screen h-screen flex  flex-col justify-center items-center mr-4">
      <p>{count}</p>
      <button onClick={handleClickButton} className="bg-blue-500 p-3">Adicionar mais 1</button>
    </div>
  );
}


export default Page;
