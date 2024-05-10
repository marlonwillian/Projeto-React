import styles from "./GameList.module.css";
import SearchCard from "../SearchCard";
import games from "../../json/games.json";
import { convertPrice } from "../CartButton";

function GameList({ jogos, cart, display, width, height }) {
    let total = 0;

    jogos.map((jogo) => 
        typeof(games[jogo.id].preco) == "object" 
        && typeof(games[jogo.id].discount) == "number" ? 
        total += games[jogo.id].preco[0] - (games[jogo.id].preco[0] * (games[jogo.id].discount/100)) 
        : 
        typeof(games[jogo.id].preco) == "number" 
        && typeof(games[jogo.id].discount) == "number" ? 
        total += games[jogo.id].preco - (games[jogo.id].preco * (games[jogo.id].discount/100))
        :
        typeof (games[jogo.id].preco) == "object" ? 
        total += games[jogo.id].preco[0]
        : 
        total += games[jogo.id].preco
    )

    return (
        <>
            <i 
                className={`fa-solid fa-caret-up ${styles.arrow}`} 
                style={{ display: jogos == 0 || cart == "true" ? "none" : "block" }}>
            </i>
            <div 
                className={styles.searchCard} 
                style={{ 
                    display: jogos == 0 || cart == "true" ? "none" : "block", 
                    display: display, width: width, height: height 
                }}
            >
                {   
                    jogos.map((jogo) => 
                        <SearchCard
                            cart={cart}
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
                <hr className={styles.line}/>
                <div className={styles.summaryItens}>
                    <span className={styles.productQt}>
                        {`${jogos.length} ${jogos.length == 1 ? "Produto" : "Produtos" }`}
                    </span>
                    <span className={styles.total}>
                        Total: R$ {convertPrice(total)}
                    </span>
                </div>
                <button className={styles.button}>Finalizar compra</button>
            </div>
        </>
    );
}

export default GameList;