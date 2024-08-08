'use client'

import { useState } from "react";
import Image from "next/image";

import IconArrowLeftShort from "./icons/IconArrowLeftShort";
import IconArrowRightShort from "./icons/IconArrowRightShort";

export default function Home() {
  const stepNames = ['Componentes do circuito', 'Etapa de busca', 'Etapa de decodificação', 'Etapa de execução', 'Etapa de acesso à memória', 'Etapa de escrita'];

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
              fill
              objectFit="contain"
            />
            <button onClick={() => setButtonSelected(1)} className={`bg-blue-600/15 absolute w-[30%] h-[20%] top-[10%] left-[25%] border-blue-600 ${buttonSelected == 1 && 'border-4'}`}></button>
            <button onClick={() => setButtonSelected(2)} className={`bg-green-600/15 absolute w-[40%] h-[20%] top-[70%] left-[20%] border-green-600 ${buttonSelected == 2 && 'border-4'}`}></button>
            <button onClick={() => setButtonSelected(3)} className={`bg-orange-600/15 absolute w-[30%] h-[30%] top-[15%] left-[60%] border-orange-600 ${buttonSelected == 3 && 'border-4'}`}></button>
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
                <p>
                  PC: PC é uma sigla para Program Counter, ou Contador do Programa. Sua função é dizer em qual posição da memória está o dado que estamos buscando.
                </p>
                <p>
                  MEMÓRIA: A memória guarda os dados que serão usados na execução de um programa. Uma memória tem várias posições, e em cada uma existe uma informação guardada. Podemos pensar nela como um armário com diversas gavetas. Em cada gaveta, há um dado guardado, e quando queremos um determinado dado, abrimos a gaveta onde ele está e o pegamos para usar. No circuito, podemos ver duas memórias, cada uma com um propósito: a MEMÓRIA DE INSTRUÇÕES, que, como seu nome indica, guarda as instruções que serão seguidas para a execução de uma determinada tarefa; e a MEMÓRIA DE DADOS, que guarda valores usados pelo programa.
                </p>
                <p>
                  BANCO DE REGISTRADORES: o banco de registradores tem uma função parecida com a da memória: guardar dados usados pelo programa. Porém, é mais fácil acessá-lo que a memória, e todos os dados que serão usados devem primeiro ser trazidos da memória para o banco de registradores. Uma vez que isso é feitos, eles podem ser utilizados.
                </p>
                <p>
                  ULA: ULA significa Unidade Lógica e Aritmética, e é ela quem realiza operações de adição, subtração, multiplicação e divisão, além de outras, como verificar se um número é maior que outro, se dois números são iguais, etc.
                </p>
              </>
            }
            { buttonSelected == 1 && 
              <p>
                Na etapa de busca da instrução, a memória é acessada na posição indicada pelo PC. O conteúdo armazenado nessa posição de memória é levado para o registrador de instruções (IR). O PC é, então, atualizado para a posição da próxima instrução, que depende do modo com que o computador foi planejado.
              </p>
            }
            { buttonSelected == 2 && 
              <p>
                Na etapa de decodificação, o processador lê a instrução buscada na etapa anterior e determina o que será executado. É como se nessa etapa acontecesse o planejamento de como a tarefa será realizada. A instrução traz todas as informações necessárias para a execução, como: se há necessidade de acessar a memória, o banco de registradores, ou ambos; se a ULA será usada, e qual a operação aritmética a ser feita, dentre outras informações importantes. Com isso, a unidade de controle gera sinais que ativarão as partes dos circuitos que serão utilizadas nas próximas etapas.
              </p>
            }
            { buttonSelected == 3 && 
              <p>
                Na etapa de execução, o que foi planejado na etapa anterior é, então, executado. Por exemplo, se a instrução indicava a necessidade de somar dois números que estavam armazenados em dois registradores, é neste momento que a soma será feita.
              </p>
            }
            { buttonSelected == 4 && 
              <p>
                Na etapa de acesso à memória, acontece a leitura ou escrita de dados que estão guardados na memória. Se a instrução do momento diz para trazer um valor da memória para um dos registradores, ou escrever um valor que está em um registrador na memória, isso será feito agora.
              </p>
            }
            { buttonSelected == 5 && 
              <p>
                Na etapa de escrita no banco de registradores, acontece o armazenamento do resultado de uma operação em um registrador. Depois de fazer uma multiplicação na ULA, por exemplo, o resultado deve ser guardado em algum lugar para poder ser utilizado posteriormente. Portanto, nesta etapa, este resultado é escrito em um registrador.
              </p>
            }
          </div>
        </div>
      </div>
    </main>
  );
}
