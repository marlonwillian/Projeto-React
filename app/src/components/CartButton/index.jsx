import { Link } from "react-router-dom";
import { useCartContext } from "../../context/Cart";
import styles from "./CartButton.module.css";

export const convertPrice = (price) => Number(price).toFixed(2).replace('.', ',');

function CartButton({margintop, marginleft, discount, price, id}) {
    let desconto = discount/100
    desconto = desconto * price  
    let newPrice = price - desconto

    const { inCart, addCart } = useCartContext()
    const noCart = inCart.some((cart) => cart.id === id)
    const icone = noCart ? "fa-solid fa-xmark" : "fa-solid fa-cart-plus"
    
    return (
        <button 
            className={styles.btn} 
            style={{ marginTop: margintop, marginLeft: marginleft}}
            onClick={typeof(price) == "number" ? () => addCart({id}) : null}
        >
            {
                typeof(discount) == "number" ? 
                <span className={styles.discount}> -{discount}% </span> : null
            }
            {
                typeof(price) == "number" ?
                <>
                    <span className={styles.price}>
                        R$ {
                            typeof(discount) == "number" ? 
                            `${convertPrice(newPrice)}` : `${convertPrice(price)}`
                        }
                    </span>
                    <i class={`${icone}`} style={{color: noCart ? "red" : "white"}}></i>
                </> 
                : 
                <Link to={`/jogo/${id}`}>
                    <span style={{padding: "5px"}}>Anunciado</span>
                </Link>
            }
        </button>
    );
}

export default CartButton;