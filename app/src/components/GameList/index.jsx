import styles from "./GameList.module.css";
import SearchCard from "../SearchCard";
import games from "../../json/games.json";

function GameList({ jogos, cart, display, width, height }) {
    let subtotal = 0;
    console.log(subtotal)
    jogos.map((id) => games[id].preco == "object" ? subtotal += games[id].preco[0] : subtotal += [id].preco)
    console.log(subtotal)

    return (
        <>
            <i 
                className={`fa-solid fa-caret-up ${styles.arrow}`} 
                style={{ display: jogos == 0 || cart == "true" ? "none" : "block" }}>
            </i>
            <div 
                className={styles.searchCard} 
                style={{ display: jogos == 0 || cart == "true" ? "none" : "block", display: display, width: width, height: height }}
            >
                {   
                    jogos.map((jogo) =>
                        <SearchCard
                            cart="true"
                            id={jogo.id}
                            title={jogo.title}
                            price={jogo.preco}
                            img={jogo.cover}
                        />
                    ) 
                }
            </div>
            <div 
                className={styles.summary} 
                style={{ display: cart ? "block" : "none"}}
            >
                <div className={styles.summaryItens}>
                    <span>
                        {`${jogos.length} ${jogos.length == 1 ? "produto" : "produtos" }`}
                    </span>
                    <span>
                        Subtotal: {subtotal}
                    </span>
                </div>
            </div>
        </>
    );
}

export default GameList;