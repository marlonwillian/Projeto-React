import styles from "./GameList.module.css";
import SearchCard from "../SearchCard";

function GameList({ jogos, arrow, width, height }) {
    console.log(jogos)

    return (
        <>
            <i 
                className={`fa-solid fa-caret-up ${styles.arrow}`} 
                style={{ display: jogos == 0 || arrow == "false" ? "none" : "block" }}>
            </i>
            <div 
                className={styles.searchCard} 
                style={{ display: jogos == 0 ? "none" : "block", width: width, height: height }}
            >
                {   
                    jogos.map((jogo) =>
                    <SearchCard
                        cart="true"
                        id={jogo}
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