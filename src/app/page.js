'use client'

import { useState } from "react";
import Image from "next/image";

import IconArrowLeftShort from "./icons/IconArrowLeftShort";
import IconArrowRightShort from "./icons/IconArrowRightShort";

export default function Home() {
  const stepNames = ['Componentes do circuito', 'Etapa de busca', 'Etapa de decodificação', 'Etapa de execução', 'Etapa de acesso à memória', 'Etapa de escrita no banco de registradores'];

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
        <div className=" bg-white flex-1 rounded-lg p-5 md:p-10 text-lg md:text-xl text-slate-800 flex flex-col gap-5 text-justify leading-7 md:leading-8">
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Nibh vivamus vulputate massa urna euismod sollicitudin odio vivamus nisl. Curabitur quisque platea volutpat a ultricies laoreet. Natoque rhoncus placerat tincidunt; magna ultrices ultricies. Felis dignissim nulla tellus senectus quisque auctor phasellus sociosqu. Natoque nascetur ad, tincidunt fusce egestas quam. Nulla felis nisl senectus fringilla magnis est duis lacinia. Tempus volutpat bibendum aptent libero felis gravida.
          </p>
          <p>Clique em uma das etapas do circuito para saber sobre ela.</p>
          <div className=" relative w-full aspect-[1.8]">
            <Image
              src="/circuito.png"
              alt="imagem de um circuito risc v monociclo"
              fill
              objectFit="contain"
            />
            <button onClick={() => setButtonSelected(1)} className={`bg-blue-600/15 absolute w-[34%] h-[80%] top-[10%] left-[2%] border-blue-600 ${buttonSelected == 1 && 'border-4'}`}></button>
            <button onClick={() => setButtonSelected(2)} className={`bg-green-600/15 absolute w-[25%] h-[42%] top-[46%] left-[37%] border-green-600 ${buttonSelected == 2 && 'border-4'}`}></button>
            <button onClick={() => setButtonSelected(3)} className={`bg-red-600/15 absolute w-[12%] h-[39%] top-[46%] left-[63%] border-red-600 ${buttonSelected == 3 && 'border-4'}`}></button>
            <button onClick={() => setButtonSelected(3)} className={`bg-red-600/15 absolute w-[16%] h-[31%] top-[8%] left-[40%] border-red-600 ${buttonSelected == 3 && 'border-4'}`}></button>
            <button onClick={() => setButtonSelected(4)} className={`bg-yellow-600/15 absolute w-[20%] h-[43%] top-[54%] left-[75.5%] border-yellow-600 ${buttonSelected == 4 && 'border-4'}`}></button>
            <button onClick={() => setButtonSelected(5)} className={`bg-purple-600/15 absolute w-[60%] h-[5.5%] top-[40%] left-[37.5%] border-purple-600 ${buttonSelected == 5 && 'border-4'}`}></button>
          </div>
          <button onClick={() => setButtonSelected(0)} className="bg-[#3197C2BB] text-white text-lg py-2 px-4 rounded-full">Sobre os componentes</button>
        </div>
        <div className=" bg-white flex-1 rounded-lg p-5 md:p-10">
          <div className="flex w-full justify-between items-start mb-5 gap-5">
            <button onClick={handlePrevious} className="bg-[#3197C2BB] w-12 h-12 flex justify-center items-center rounded-full text-4xl">
              <IconArrowLeftShort />
            </button>
            <h2 className=" text-slate-800 text-xl md:text-2xl font-bold text-center">{stepNames[buttonSelected]}</h2>
            <button onClick={handleNext} className="bg-[#3EC231BB] w-12 h-12 flex justify-center items-center rounded-full text-4xl">
              <IconArrowRightShort />
            </button>
          </div>
          <div className="w-full text-slate-800 flex flex-col gap-5 text-lg md:text-xl text-justify leading-7 md:leading-8">
            { buttonSelected == 0 && 
              <>
                <div>
                  <h3 className=" font-bold">PC (Program Counter - Contador do Programa):</h3>
                  <p>
                    O PC é como um marcador de páginas em um livro. Ele nos diz exatamente em qual página (ou posição da memória) estamos agora, e para onde devemos ir em seguida. Quando queremos ler uma nova instrução, é o PC que aponta para onde devemos ir na memória.
                  </p>
                </div>
                <div>
                  <h3 className=" font-bold">MEMÓRIA:</h3>
                  <p>
                    Imagine a memória como um grande armário cheio de gavetas. Cada gaveta guarda uma informação importante, seja uma instrução ou um dado. Quando o computador precisa de algo, ele &#34;abre&#34; a gaveta correta para pegar o que precisa.
                  </p>
                  <ul className="list-disc">
                    <li className=" ml-10"><span className=" font-semibold">MEMÓRIA DE INSTRUÇÕES:</span> Esta parte do armário guarda o &#34;manual de instruções&#34; que o computador segue. Cada instrução diz ao computador o que fazer em seguida.</li>
                    <li className=" ml-10"><span className=" font-semibold">MEMÓRIA DE DADOS:</span> Outra parte do armário, mas esta guarda os ingredientes (dados) que o computador usa para realizar suas tarefas. Quando o computador precisa de um valor específico, ele o busca aqui.</li>
                  </ul>
                </div>
                <div>
                  <h3 className=" font-bold">BANCO DE REGISTRADORES:</h3>
                  <p>
                    Pense no banco de registradores como uma prateleira pequena e rápida de acessar, onde o computador coloca as informações que ele vai usar imediatamente. Antes de trabalhar com qualquer dado, ele primeiro traz o dado da memória e o coloca nessa prateleira, para poder usá-lo rapidamente.
                  </p>
                </div>
                <div>
                  <h3 className=" font-bold">ULA (Unidade Lógica e Aritmética):</h3>
                  <p>
                    A ULA é a &#34;calculadora&#34; do computador. É ela que faz todas as contas, como somar ou subtrair, e também faz comparações, como verificar qual número é maior ou se dois números são iguais. Se o computador precisa fazer qualquer tipo de cálculo, ele pede ajuda à ULA.
                  </p>
                </div>
              </>
            }
            { buttonSelected == 1 && 
              <p>
                Nesta etapa, o computador busca a próxima instrução a ser executada. Para fazer isso, ele usa o PC (Contador do Programa) como um guia, que indica a posição exata na memória onde a instrução está armazenada. O conteúdo dessa posição é então carregado no registrador de instruções (IR). Uma vez que a instrução é carregada, o PC é atualizado para apontar para a próxima instrução, garantindo que o computador saiba para onde ir em seguida.
              </p>
            }
            { buttonSelected == 2 && 
              <p>
                Agora que o computador tem a instrução, ele precisa entender o que deve fazer. Nesta etapa, a instrução é &#34;decodificada&#34; - ou seja, o computador analisa e interpreta a instrução para determinar as ações necessárias. É como planejar as etapas de uma tarefa complexa. A decodificação revela se o computador precisa acessar a memória, o banco de registradores, ou utilizar a ULA (Unidade Lógica e Aritmética) para realizar operações como soma ou subtração. Com essa análise, a unidade de controle gera sinais que preparam os componentes do computador para a próxima fase.
              </p>
            }
            { buttonSelected == 3 && 
              <p>
                Esta é a fase em que o planejamento feito anteriormente é colocado em ação. Por exemplo, se a instrução decodificada indica que dois números devem ser somados, a ULA realizará essa operação agora. Tudo o que foi planejado na etapa de decodificação é executado nesta fase.
              </p>
            }
            { buttonSelected == 4 && 
              <p>
                Se a instrução exige que o computador leia ou escreva dados na memória, isso acontece nesta etapa. Por exemplo, se a instrução diz para buscar um valor armazenado na memória e carregá-lo em um registrador, ou para salvar um valor de um registrador na memória, é agora que o computador faz isso. Esta etapa garante que os dados necessários estejam disponíveis para o processamento.
              </p>
            }
            { buttonSelected == 5 && 
              <p>
                Depois que uma operação, como uma multiplicação, é realizada pela ULA, o resultado precisa ser guardado para ser usado mais tarde. Nesta etapa, o computador armazena o resultado em um registrador específico. Isso garante que o resultado esteja disponível para qualquer outra operação ou instrução que possa precisar dele no futuro.
              </p>
            }
          </div>
        </div>
      </div>
    </main>
  );
}
