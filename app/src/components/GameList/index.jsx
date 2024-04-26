import styles from "./GameList.module.css";
import SearchCard from "../SearchCard";

function GameList({ jogos }) {
    return (
        <>
            <i 
                className={`fa-solid fa-caret-up ${styles.arrow}`} 
                style={{ display: jogos == 0 ? "none" : "block" }}>
            </i>
            <div 
                className={styles.searchCard} 
                style={{ display: jogos == 0 ? "none" : "block" }}
            >
                {   
                    jogos.map((jogo) =>
                    <SearchCard
                        id={jogo.id}
                        title={jogo.title}
                        price={jogo.preco}
                        img={jogo.cover}
                    />) 
                }
            </div>
        </>
    );
}

export default GameList;