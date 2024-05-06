import styles from "./SearchCard.module.css";
import { Link } from "react-router-dom";
import jogos from "../../json/games.json"
import { convertPrice } from "../CartButton";
import { useCartContext } from "../../context/Cart";

function SearchCard({ id, cart }) {
    const { inCart, addCart } = useCartContext()
    const noCart = inCart.some((cart) => cart.id === id)
    const icone = noCart && cart == "true" ? "fa-solid fa-x" : null

    return (
        <>
            <Link className={styles.link} to={`/jogo/${id}`}>
                <div className={styles.searchGame}>
                    <img
                        src={jogos[id].cover}
                        alt="título do jogo"
                    />
                    <div className={styles.info}>
                        <span className={styles.title}>{jogos[id].title}</span>
                        <span className={styles.price}>
                        {
                            typeof (jogos[id].discount) == "number" ?
                                <span className={styles.discount}> -{jogos[id].discount}% </span>
                                :
                                null
                        }
                        {
                            typeof (jogos[id].preco) == "object"
                            && typeof (jogos[id].discount) == "number" ?
                                <span>
                                    <i 
                                        style={{ 
                                            textDecoration: "line-through", 
                                            marginRight: "5px",
                                            fontSize: "15px" 
                                        }}
                                    >
                                        {convertPrice(jogos[id].preco[0])}
                                    </i>
                                    <i
                                        style={{ 
                                            fontSize: "15px" 
                                        }}
                                    >
                                        {
                                            convertPrice(
                                                jogos[id].preco[0] - (jogos[id].preco[0] * (jogos[id].discount/100))
                                            )
                                        }
                                    </i>
                                </span>
                                : typeof (jogos[id].preco) == "number"
                                && typeof (jogos[id].discount) == "number" ?
                                    <span style={{fontSize: "10px"}}>
                                        <i 
                                            style={{ 
                                                textDecoration: "line-through", 
                                                marginRight: "5px",
                                                fontSize: "15px" 
                                            }}
                                        >
                                            R$ {convertPrice(jogos[id].preco)}
                                        </i>
                                        <i
                                            style={{ 
                                                fontSize: "15px" 
                                            }}
                                        > 
                                            R$ {
                                                convertPrice(
                                                    jogos[id].preco - (jogos[id].preco * (jogos[id].discount/100))
                                                )
                                            }
                                        </i>
                                    </span>
                                : typeof (jogos[id].preco) == "object" ? 
                                <span>R$ {convertPrice(jogos[id].preco[0])}</span> 
                                : 
                                <span>R$ {convertPrice(jogos[id].preco)}</span>
                            }
                        </span>
                    </div>
                </div>
            </Link>
            <i
                className={`${icone} ${styles.delete}`}
                style={{ fontSize: "13px" }}
                onClick={() => addCart({ id })}
            ></i>
        </>
    );
}

export default SearchCard;