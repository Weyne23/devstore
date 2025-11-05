import Link from "next/link";
import Image from "next/image"
import { number } from "zod";

export default function SearchPage() {
    return (
        <div className="flex flex-col gap-4">
            <p className="text-sm">
                Resultados para: <span className="font-semibold">Teste</span>
            </p>

            <div className="grid grid-cols-3 gap-6 ">
                <Link 
                    href={`/product/moletom-ai-side`}
                    className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
                >
                    {/* Quality é a qualidade da imagem a ser carregada, por padrão é carregada como 100 */}
                    <Image 
                    src="/moletom-ai-side.png" 
                    className="group-hover:scale-105 transition-transform duration-500" 
                    width={480} 
                    height={480} 
                    quality={100} 
                    alt="moleton never stop"
                    />

                    <div className="absolute bottom-10 right-10 h-12 flex items-center 
                        gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 
                      bg-black/60 p-1 pl-5"
                    >
                        {/* "truncate" serve para caso o nome não caiba no container ele bote 3 pontinhos no final */}
                        <span className="text-sm truncate">teste</span>
                        <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold"
                        >
                        {(129).toLocaleString("pt-BR", {
                            style: 'currency',
                            currency: 'BRL',
                            //retira a parte de centavos
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                        })}
                        </span>
                    </div>
                </Link>
                <Link 
                    href={`/product/teste`}
                    className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
                >
                    {/* Quality é a qualidade da imagem a ser carregada, por padrão é carregada como 100 */}
                    <Image 
                    src="/moletom-ai-side.png" 
                    className="group-hover:scale-105 transition-transform duration-500" 
                    width={480} 
                    height={480} 
                    quality={100} 
                    alt="moleton never stop"
                    />

                    <div className="absolute bottom-10 right-10 h-12 flex items-center 
                      gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 
                    bg-black/60 p-1 pl-5"
                    >
                        {/* "truncate" serve para caso o nome não caiba no container ele bote 3 pontinhos no final */}
                        <span className="text-sm truncate">teste</span>
                        <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold"
                        >
                        {(129).toLocaleString("pt-BR", {
                            style: 'currency',
                            currency: 'BRL',
                            //retira a parte de centavos
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                        })}
                        </span>
                    </div>
                </Link>
                <Link 
                    href={`/product/teste`}
                    className="group relative rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
                >
                    {/* Quality é a qualidade da imagem a ser carregada, por padrão é carregada como 100 */}
                    <Image 
                    src="/moletom-ai-side.png" 
                    className="group-hover:scale-105 transition-transform duration-500" 
                    width={480} 
                    height={480} 
                    quality={100} 
                    alt="moleton never stop"
                    />

                    <div className="absolute bottom-10 right-10 h-12 flex items-center 
                       gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 
                     bg-black/60 p-1 pl-5"
                    >
                        {/* "truncate" serve para caso o nome não caiba no container ele bote 3 pontinhos no final */}
                        <span className="text-sm truncate">teste</span>
                        <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold"
                        >
                        {(129).toLocaleString("pt-BR", {
                            style: 'currency',
                            currency: 'BRL',
                            //retira a parte de centavos
                            minimumFractionDigits: 0,
                            maximumFractionDigits: 0,
                        })}
                        </span>
                    </div>
                </Link>
            </div>
        </div>
    )
}