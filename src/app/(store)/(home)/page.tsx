import { api } from "@/data/api";
import { Product } from "@/data/types/product";
import Image from "next/image";
import Link from "next/link";

async function getFeaturedProducts(): Promise<Product[]> {
  const response = await api('/products/featured',{
    next: {
      revalidate: 30 //Aqui nos estamos cahceando a requicisão mas com um tempo limite, 
      // aqui no caso uma hora, de cache, o usuário faz a requicisão e se o valor 
      // não estiver em cache ele busca e valor e guarda, os outros usuários que
      // fizerem a requicisão dentro do tempo estipulado pelo revalidate iram pegar
      // o valor detro do cache, caso sejá feita uma requicisão após o tempo do cache
      // o valor vai ser consultado novamente no banco de dados e é refeito o ciclo
      // de cache.
    }
  })

  const products = await response.json();

  return products;
}

export default async function Home() {
  //Desestruturou o array para deixar o primeiro como item 
  // principal e o resto como os secundários
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts();

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link 
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
      >
        {/* Quality é a qualidade da imagem a ser carregada, por padrão é carregada como 100 */}
        <Image 
          src={highlightedProduct.image} 
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
            {/* "truncate" serve para caso o nome não caiba no container ele bote 3 pontinhos no final */}
            <span className="text-sm truncate">{highlightedProduct.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold"
            >
              {highlightedProduct.price.toLocaleString("pt-BR", {
                style: 'currency',
                currency: 'BRL',
                //retira a parte de centavos
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
        </div>
      </Link>
      {otherProducts.map((product) => (
        <Link 
          key={product.id}
          href={`/product/${product.slug}`}
          // o group serve para marcar componente que quero alterados por igual 
          className="group relative col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-start"
        >
          {/* Quality é a qualidade da imagem a ser carregada, por padrão é carregada como 100 */}
          <Image 
            src={product.image}
            //Aqui o goup sendo usado para criar um hover no elemento
            className="group-hover:scale-105 transition-transform duration-500" 
            width={920} 
            height={920} 
            quality={100} 
            alt="moletom never stop"
          />

          <div className="absolute bottom-10 right-10 flex items-center 
            gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 
          bg-black/60 p-1 pl-5"
          >
            {/* "trncate" serve para caso o nome não caiba no container ele bore 3 pontinhos no final */}
            <span className="text-sm truncate">{product.title}</span>
            <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold"
            >
              {
                product.price.toLocaleString("pt-BR", {
                style: 'currency',
                currency: 'BRL',
                //retira a parte de centavos
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
