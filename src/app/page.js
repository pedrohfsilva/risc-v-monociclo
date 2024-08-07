'use client'

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const stepNames = ['nome 1', 'nome 2', 'nome 3', 'nome 4', 'nome 5'];

  const [buttonSelected, setButtonSelected] = useState(0);

  function handlePrevious() {
    if(buttonSelected > 0)
      setButtonSelected(buttonSelected-1);
  }

  function handleNext() {
    if(buttonSelected < 5)
      setButtonSelected(buttonSelected+1);
  }

  return (
    <main className="flex min-h-screen flex-col p-5 md:p-10 bg-slate-200 items-center">
      <h1 className=" text-slate-800 text-2xl md:text-4xl font-bold mb-5 md:mb-10">Risc V - Monociclo</h1>
      <div className=" flex-col md:flex-row w-full gap-5 md:gap-10 flex max-w-[1600px]">
        <div className=" bg-white flex-1 rounded-lg p-5 text-lg">
          <p className=" text-slate-800">Clique em qualquer parte do circuito para saber sobre ele</p>
          <div className=" relative w-full aspect-[1.5]">
            <Image
              src="/circuito.png"
              fill
              objectFit="contain"
            />
            <button onClick={() => setButtonSelected(1)} className={`bg-blue-600/15 absolute w-[30%] h-[20%] top-[10%] left-[25%] border-blue-600 ${buttonSelected == 1 && 'border-4'}`}></button>
            <button onClick={() => setButtonSelected(2)} className={`bg-green-600/15 absolute w-[40%] h-[20%] top-[70%] left-[20%] border-green-600 ${buttonSelected == 2 && 'border-4'}`}></button>
            <button onClick={() => setButtonSelected(3)} className={`bg-orange-600/15 absolute w-[30%] h-[30%] top-[15%] left-[60%] border-orange-600 ${buttonSelected == 3 && 'border-4'}`}></button>
          </div>
        </div>
        <div className=" bg-white flex-1 rounded-lg p-5">
          <div className="flex w-full justify-between items-center">
            <button onClick={handlePrevious} className="bg-[#3197C2] px-4 py-1 rounded-full">Anterior</button>
            <h2 className=" text-slate-800 text-xl md:text-2xl font-bold">{stepNames[buttonSelected]}</h2>
            <button onClick={handleNext} className="bg-[#3EC231] px-4 py-1 rounded-full">Próxima</button>
          </div>
        </div>
      </div>
    </main>
  );
}
