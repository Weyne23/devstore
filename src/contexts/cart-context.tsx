'use client'

import { createContext, ReactNode, useContext, useState } from "react";

type CartItem = {
    productId: number
    quantity: number
}

type CartContextType = {
    items: CartItem[]
    addToCart: (productId: number) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children:ReactNode }) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function addToCart(productId: number) {
        //Quando se faz um função dentro de um useState
        //eu consigo ver o valor do estado antes da atualização
        //de valor com o campo nesse exemplo sendo "state"
        setCartItems(state => {
            const productInCart = state.some((item) => item.productId === productId)

            if(productInCart) {
                return state.map(item => {
                    if (item.productId === productId) {
                        return { ...item, quantity: item.quantity + 1 }
                    }
                    else {
                        return item
                    }
                })
            }
            else{
                //Retornando tudo que está no carrinho mais o novo produto
                return [...state, {productId, quantity: 1}]
            }
        })
    }

    return (
        <CartContext.Provider value={{ items: cartItems, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => useContext(CartContext);