import { Link } from "react-router-dom";
import styles from "./CartButton.module.css";

function CartButton({margintop, marginleft, discount, price}) {
    function convertPrice(price) {
        price = price.toLocaleString('pt-br', {minimumFractionDigits: 2});
        return price
    }
    
    let desconto = discount/100
    desconto = desconto * price  
    let newPrice = price - desconto

    return (
        <Link to="/playstation">
            <button className={styles.btn} style={{ marginTop: margintop, marginLeft: marginleft}}>
                {
                    typeof(discount) == "number" ? <span className={styles.discount}> -{discount}% </span> : null
                }
                <i class="fa-solid fa-cart-plus"></i>
                <span>{ typeof(discount) == "number" ? `${convertPrice(newPrice)}` : `${convertPrice(price)}`}</span>
            </button>
        </Link>
    );
}

export default CartButton;