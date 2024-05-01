import styles from "./SearchCard.module.css";
import { Link } from "react-router-dom";
import jogos from "../../json/games.json"

function SearchCard({ cart, id, title, price, img }) {
    console.log(id)

    return (
        <Link className={styles.link} to={`/jogo/${id}`}>
            <div className={styles.searchGame}>
                <img 
                    src={cart ? jogos[id].cover : img}
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