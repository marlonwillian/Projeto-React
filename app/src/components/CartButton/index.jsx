import { Link } from "react-router-dom";
import { useCartContext } from "../../context/Cart";
import styles from "./CartButton.module.css";

export const convertPrice = (price) => Number(price).toFixed(2).replace('.', ',');

function CartButton({id, price, discount, gamePage, margintop, marginleft, opacity}) {
    let desconto = discount/100
    desconto = desconto * price  
    let newPrice = price - desconto

    const { inCart, addCart } = useCartContext()
    const noCart = inCart.some((cart) => cart.id === id)
    const icone = noCart ? "fa-solid fa-xmark" : "fa-solid fa-cart-plus"

    return (
        <>
            <button 
                className={styles.btn}
                style={{
                    display: noCart && gamePage? "block" : "none", 
                    width: "auto", textAlign: "center", 
                    fontSize: "20px", marginRight: "30px"
                }}
            >
                <span style={{paddingRight: "10px"}}> 
                    <i 
                        class="fa-solid fa-check" 
                        style={{marginInline: "10px", color: "green"}}
                    >
                    </i>
                    Comprar
                </span>
            </button>
            <button
                className={styles.btn}
                style={{ 
                    marginTop: margintop, marginLeft: marginleft, 
                    transition: "1.5s ease", opacity: opacity, 
                    cursor: opacity == 0 ? "auto" : "pointer" }}
                onClick={
                    typeof(price) == "number" && opacity == 1 ? () => addCart({id}) : null
                }
                type="button"
            >
            
                {
                    typeof(discount) == "number" && gamePage != true ?
                    <span className={styles.discount}> -{discount}% </span> : null
                }
                {
                    typeof(price) == "number" && gamePage != true ?
                    <>
                        <span className={styles.price}>
                            R$ {
                                typeof(discount) == "number" ?
                                `${convertPrice(newPrice)}` : `${convertPrice(price)}`
                            }
                        </span>
                        <i class={`${icone}`} style={{color: noCart ? "red" : "white"}}></i>
                    </>
                    : typeof(price) == "number" || "object" && gamePage == true ?
                    <>
                        <span className={styles.price}>
                            {noCart? "Remover" : "Adicionar ao Carrinho"}
                        </span>
                        <i class={`${icone}`} style={{color: noCart ? "red" : "white"}}></i>
                    </>
                    : typeof(price) === "string" ?
                    <Link to={`/jogo/${id}`}>
                        <span style={{padding: "5px"}}>Anunciado</span>
                    </Link> : null
                }
            </button>
        </>
    );
}

export default CartButton;