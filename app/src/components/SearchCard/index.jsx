import styles from "./SearchCard.module.css";
import { Link } from "react-router-dom";
import jogos from "../../json/games.json"

function SearchCard({ id }) {
    return (
        <Link className={styles.link} to={`/jogo/${id}`}>
            <div className={styles.searchGame}>
                <img 
                    src={jogos[id].cover}
                    alt="título do jogo"
                />
                <div className={styles.info}>
                    <span className={styles.title}>{jogos[id].title}</span>
                    <span className={styles.price}>{jogos[id].preco}</span>
                </div>
            </div>
        </Link>
    );
}

export default SearchCard;