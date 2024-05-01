import { createContext, useContext, useState } from "react";

export const CartContext = createContext()
CartContext.displayName = "CartGames"

export default function CartProvider({ children }) {
    const [inCart, setCart] = useState([])

    return (
        <CartContext.Provider
            value={{ inCart, setCart }}
        >
            { children }
        </CartContext.Provider>
    );
}

export function useCartContext() {
    const { inCart, setCart } = useContext(CartContext)

    function addCart(newCart) {
        const repeatedCart = inCart.some((item => item.id === newCart.id))

        let newList = [...inCart]

        if(!repeatedCart) {
            newList.push(newCart)
            return setCart(newList)
        }

        newList = inCart.filter((cart) => cart.id !== newCart.id)
        return setCart(newList)
    }

    return {
        inCart,
        addCart
    }
}