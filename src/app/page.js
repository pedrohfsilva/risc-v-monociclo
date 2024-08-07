'use client'

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [buttonSelected, setButtonSelected] = useState(1);

  return (
    <main className="flex min-h-screen flex-col p-5 md:p-10 bg-slate-200 items-center">
      <h1 className=" text-slate-900 text-2xl font-bold mb-5 md:mb-10">Risc V - Monociclo</h1>
      <div className=" flex-col md:flex-row w-full gap-5 md:gap-10 flex max-w-[1600px]">
        <div className=" bg-white flex-1 h-80 rounded-lg p-5 text-lg">
          <p className=" text-slate-900">Clique em qualquer parte do circuito para saber sobre ele</p>
        </div>
        <div className=" bg-white flex-1 h-80 rounded-lg p-5">
          
        </div>
      </div>
    </main>
  );
}
