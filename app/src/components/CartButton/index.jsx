import { useCartContext } from "../../context/Cart";
import styles from "./CartButton.module.css";

export const convertPrice = (price) => Number(price).toFixed(2).replace('.', ',');

function CartButton({margintop, marginleft, discount, price, id}) {
    let desconto = discount/100
    desconto = desconto * price  
    let newPrice = price - desconto

    const { inCart, addCart } = useCartContext()
    const noCart = inCart.some((cart) => cart.id === id)
    const icone = noCart ? "fa-solid fa-cart-arrow-down" : "fa-solid fa-cart-plus"

    return (
        <button 
            className={styles.btn} 
            style={{ marginTop: margintop, marginLeft: marginleft}}
            onClick={() => addCart({id})}
        >
            {
                typeof(discount) == "number" ? <span className={styles.discount}> -{discount}% </span> : null
            }
            <i class={`${icone}`}></i>
            <span>R$ {typeof(discount) == "number" ? `${convertPrice(newPrice)}` : `${convertPrice(price)}`}</span>
        </button>
    );
}

export default CartButton;