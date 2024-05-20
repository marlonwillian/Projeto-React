import styles from "./Form.module.css";
import jogo from "../../json/games.json"
import FilterPlataform from "../FilterPlataform";
import React, { useState } from 'react';
import CartButton, { convertPrice } from "../CartButton";
import { useCartContext } from "../../context/Cart";

function Form({ id }) {
    const opcoes = jogo[id].preco;

    const { inCart, addCart } = useCartContext();
    const noCart = inCart.some((cart) => cart.id === id);
    const checkPrice = inCart.some((cart) => cart.price === opcoes[0])

    const [valorSelecionado, setValorSelecionado] = useState(
        noCart && checkPrice ? opcoes[0] : noCart && checkPrice == false ? opcoes[1] : ""
    );

    const change = (event) => {
        setValorSelecionado(event.target.value);
    };

    console.log(checkPrice)

    return (
        <div className={styles.description}>
            <h2>{jogo[parseInt(id)].title}</h2>
            <h5>{jogo[parseInt(id)].developer}</h5>
            <form className={typeof(opcoes) == "object" ? styles.edition : styles.price}>
                <FilterPlataform id={id} fontsize="13px"/>
                <hr/>
                <div style={{
                    height: valorSelecionado == '' && typeof(opcoes) != "number" ? "230px" 
                    : valorSelecionado != '' && typeof(opcoes) != "number" ? "315px" 
                    : typeof(opcoes) == "number" ? "120px" : null
                    , transition: "0.5s ease"
                }}>
                    {
                        typeof(opcoes) == "object" ?
                            opcoes.map((opcao, index) => (
                                <label key={opcao} checked>
                                    <input
                                        type="radio"
                                        value={opcao}
                                        checked={valorSelecionado == opcao}
                                        onClick={change}
                                    />
                                    <span 
                                        className={
                                            valorSelecionado == opcao ? styles.selected : null
                                        }
                                        style={{padding: "5px"}}
                                    >
                                        R$ {convertPrice(opcao)} | {index === 0 ? "Edição Padrão" : "Edição Deluxe"}
                                    </span>
                                </label> 
                            )) : <span className={styles.value}>R$ {convertPrice(jogo[id].preco)}</span>
                    }
                    <hr style={{display: typeof(opcoes) == "object" ? "block" : "none"}}/>
                    <section style={{alignItems: "flex-end"}}> 
                        <CartButton
                            id={id}
                            price={parseFloat(valorSelecionado)}
                            gamePage={true}
                            opacity={valorSelecionado == '' && typeof(opcoes) == "object" ? "0" : "1"}
                        />
                    </section>
                </div>
                <hr/>
            </form>
        </div>
    );
}

export default Form;