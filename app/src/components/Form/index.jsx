import styles from "./Form.module.css";
import jogo from "../../json/games.json"
import FilterPlataform from "../FilterPlataform";
import React, { useState } from 'react';
import CartButton, { convertPrice } from "../CartButton";

function Form({ id }) {
    const [valorSelecionado, setValorSelecionado] = useState('');
    const opcoes = jogo[id].preco;
    
    const handleChange = (event) => {
        setValorSelecionado(event.target.value);
    };

    return (
        <div className={styles.description}>
            <h2>{jogo[parseInt(id)].title}</h2>
            <h5>{jogo[parseInt(id)].developer}</h5>
            <form className={styles.edition}>
                <FilterPlataform id={id} fontsize="13px"/>
                <hr/>
                <div>
                    {
                        typeof(opcoes) == "object" ?
                            opcoes.map((opcao, index) => (
                                <label key={opcao} checked>
                                    <input
                                        type="radio"
                                        value={opcao}
                                        checked={valorSelecionado == opcao}
                                        onChange={handleChange}
                                    />
                                    <span>
                                        R$ {convertPrice(opcao)} | {index === 0 ? "Edição Padrão" : "Edição Deluxe"}
                                    </span>
                                </label> 
                            )) : <span className={styles.price}>R$ {convertPrice(jogo[id].preco)}</span>
                    }
                    <section style={{display: "inline-flex", alignItems: "flex-end"}}>
                        <CartButton
                            id={id}
                            price={
                                typeof(jogo[id].preco) == "number" ? jogo[id].preco
                                : typeof(jogo[id].preco) == "object" ? jogo[id].preco[0] : null
                            }
                            gamePage={true}
                            margintop="30px"
                        />
                    </section>
                </div>
            </form>
        </div>
    );
}

export default Form;