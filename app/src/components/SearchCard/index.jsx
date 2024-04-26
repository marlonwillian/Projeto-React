import styles from "./SearchCard.module.css";
import { Link } from "react-router-dom";

function SearchCard({ id, title, price, img }) {
    return (
        <Link className={styles.link} to={`/jogo/${id}`}>
            <div className={styles.searchGame}>
                <img 
                    src={img}
                    alt="título do jogo"
                />
                <div className={styles.info}>
                    <span className={styles.title}>{title}</span>
                    <span className={styles.price}>{price}</span>
                </div>
            </div>
        </Link>
    );
}

export default SearchCard;