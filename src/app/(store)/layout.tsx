import Header from "@/components/header";
import { CartProvider } from "@/contexts/cart-context";
import { ReactNode } from "react";

export default function StoreLayout({children} : {children:ReactNode}) {
    return (
        //-> mx-auto faz com que todo o conteúdo da pagina esteja centralizado horizontalmente 
        //-> min-h-screen faz com que essa div ocupe pelo menos toda a altura da tela
        //-> w-full combinado com max-w-[1600px] é um hack para que quando a tela for menor 
        //que 1600px nao gera barra de rolagem horizontal
        //->grid-rows-[min-content_max-content] o que esta dentro dos colchetes 
        //sao valores costumáveis e o "_" equivale a espaço em branco no tailwind
        <CartProvider>
            <div className="mx-auto grid min-h-screen w-full max-w-[1600px] 
            grid-rows-[min-content_max-content] gap-5 p-8">
                <Header />
                {children}
            </div>
        </CartProvider>
    )
}