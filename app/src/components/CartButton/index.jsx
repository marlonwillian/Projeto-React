import { Link } from "react-router-dom";
import styles from "./CartButton.module.css";

function CartButton({margintop, marginleft, discount, price}) {
    return (
        <Link to="/playstation">
            <button className={styles.btn} style={{ marginTop: margintop, marginLeft: marginleft}}>
                {
                    discount ? <span className={styles.discount}> -{discount}% </span> : null
                }
                <i class="fa-solid fa-cart-plus"></i>
                <span>{ `${price}` }</span>
            </button>
        </Link>
    );
}

export default CartButton;