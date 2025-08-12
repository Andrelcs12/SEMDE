import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-screen">
      
      <div className="bg-amber-400 w-full h-10 px-80 items-center flex justify-between">
        <div className="flex font-semibold ">
          <Link href="https://transparencia.aracaju.se.gov.br/prefeitura/" className="underline px-2 hover:text-blue-700 hover:font-bold duration-200 transition-all">Transparência</Link>
          <Link href="https://aracaju.1doc.com.br/b.php?pg=wp/wp&itd=4" className="underline px-2 hover:text-blue-700 hover:font-bold duration-200 transition-all">Ouvidoria</Link>
        </div>

        <div className="flex gap-4 font-semibold">
          <div className="flex gap-2 border-r-3 items-center px-4">
            <button className="flex items-center justify-center h-6 w-6 rounded-full border-2 text-sm">
              A-
            </button>

            <button className="flex items-center justify-center h-6 w-6 rounded-full border-2 text-sm">
              A+
            </button>

            <button className="rounded-full h-4 w-4 bg-black ">
              <div className="w-1/2 bg-white h-full rounded-l-full"></div>


            </button>


          </div>

          <p>Acessibilidade</p>
        </div>

      </div>


      <div className="px-80 py-4 flex justify-between items-center">
        <div>
          <div>
            <Image src="/logo-estado.png" alt="logo do estado de sergipe" width={250} height={40}></Image>
          </div>
        </div>

        <div className="flex gap-8 items-center">
          <ul className="flex gap-8 font-semibold text-lg">
            <li className="cursor-pointer ">Inicial</li>
            <li className="cursor-pointer">Sobre a gente</li>
            <li className="cursor-pointer">Serviços</li>
            <li className="cursor-pointer">Contatos</li>
          </ul>

          <div className="w-0.5 h-12 bg-blue-900"></div>

          <div>
            <Link href="/pages/login" className="px-4 py-2 rounded-md bg-blue-800 text-white text-md font-semibold hover:bg-blue-600 cursor-pointer duration-200 transition-all">Sou funcionário</Link>
          </div>
        </div>

      </div>


      <div className="px-80 flex flex-col gap-4">
        <div>
          <Image src="/banner1.png" alt="logo da semde" width={20000} className="w-full h-40" height={30}></Image>
        </div>

        <div className="h-64 w-full bg-blue-950 mt-8 items-center flex justify-center">
          <h1 className="text-white text-6xl px-24  font-semibold">Secretaria Municipal do Desenvolvimento Econômico e Inovação – SEMDE</h1>
        </div>

        <div className="flex justify-between gap-8  px-8 py-4">

          <div>
            <h1 className="text-2xl font-bold">Notícias em destaque:</h1>

            <div className="flex gap-4 mt-4">

              <div className="border-2 rounded-md w-96 h-80 bg-black">
                <div className="flex items-center  h-full">
                  <div className="text-4xl font-extrabold text-white">
                    <ChevronLeft size={48} />
                  </div>
                </div>
                
              </div>

              <div className="border-2 rounded-md w-96 h-80 bg-black"></div>
              <div className="border-2 rounded-md w-96 h-80 bg-black">
                <div className="flex items-center justify-end  h-full">
                  <div className="text-4xl font-extrabold text-white">
                    <ChevronRight size={48} />
                  </div>
                </div>
              </div>

            </div>

            <button className="text-2xl font-bold py-2 px-4 bg-blue-950/95 text-white rounded-md mt-2 justify-center flex w-full">Ver todas</button>

          </div>

          <div className="w-full">
            <h1 className="text-2xl font-bold">Últimas notícias</h1>

            <div className="mt-4 flex flex-col gap-1">
              <div className="w-full h-20 rounded-md bg-black"></div>
              <div className="w-full h-20 rounded-md bg-black"></div>
              <div className="w-full h-20 rounded-md bg-black"></div>
              <div className="w-full h-20 rounded-md bg-black"></div>
            </div>


          </div>
          
        </div>
      </div>


    </div>

    
  );
}
