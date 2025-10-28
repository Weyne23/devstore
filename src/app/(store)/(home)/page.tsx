import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link 
        href="/" 
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
      >
        {/* Quality é a qualidade da imagem a ser carregada, por padrão é carregada como 100 */}
        <Image 
          src="/moletom-never-stop-learning.png" 
          className="group-hover:scale-105 transition-transform duration-500" 
          width={920} 
          height={920} 
          quality={100} 
          alt="moleton never stop"
        />

        <div className="absolute bottom-28 right-28 flex items-center 
            gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 
          bg-black/60 p-1 pl-5"
        >
            {/* "trncate" serve para caso o nome não caiba no container ele bore 3 pontinhos no final */}
            <span className="text-sm truncate">Moleton Never Stop</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">R$ 129</span>
        </div>
      </Link>
      <Link 
        href="/" 
        // o group serve para marcar componente que quero alteralos por igual 
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
      >
        {/* Quality é a qualidade da imagem a ser carregada, por padrão é carregada como 100 */}
        <Image 
          src="/moletom-java.png" 
          //Aqui o goup sendo usado para criar um hover no elemento
          className="group-hover:scale-105 transition-transform duration-500" 
          width={920} 
          height={920} 
          quality={100} 
          alt="moleton never stop"
        />

        <div className="absolute bottom-10 right-10 flex items-center 
            gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 
          bg-black/60 p-1 pl-5"
        >
            {/* "trncate" serve para caso o nome não caiba no container ele bore 3 pontinhos no final */}
            <span className="text-sm truncate">Moleton Never Stop</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">R$ 129</span>
        </div>
      </Link>
      <Link 
        href="/" 
        className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
      >
        {/* Quality é a qualidade da imagem a ser carregada, por padrão é carregada como 100 */}
        <Image 
          src="/moletom-ia-p-devs.png" 
          className="group-hover:scale-105 transition-transform duration-500" 
          width={920} 
          height={920} 
          quality={100} 
          alt="moleton never stop"
        />

        <div className="absolute bottom-10 right-10 flex items-center 
            gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 
          bg-black/60 p-1 pl-5"
        >
            {/* "trncate" serve para caso o nome não caiba no container ele bore 3 pontinhos no final */}
            <span className="text-sm truncate">Moleton Never Stop</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold">R$ 129</span>
        </div>
      </Link>
    </div>
  );
}
