import styles from "./Form.module.css";
import jogo from "../../json/games.json"
import FilterPlataform from "../FilterPlataform";
import React, { useState } from 'react';
import CartButton, { convertPrice } from "../CartButton";

function Form({ id }) {
    const [valorSelecionado, setValorSelecionado] = useState('');
    const opcoes = jogo[id].preco;

    console.log(typeof(valorSelecionado))
    
    const change = (event) => {
        setValorSelecionado(event.target.value);
    };

    return (
        <div className={styles.description}>
            <h2>{jogo[parseInt(id)].title}</h2>
            <h5>{jogo[parseInt(id)].developer}</h5>
            <form className={styles.edition}>
                <FilterPlataform id={id} fontsize="13px"/>
                <hr/>
                <div style={{height: valorSelecionado == '' ? "230px" : "315px", transition: "0.5s ease"}}>
                    {
                        typeof(opcoes) == "object" ?
                            opcoes.map((opcao, index) => (
                                <label key={opcao} checked>
                                    <input
                                        type="radio"
                                        value={opcao}
                                        checked={valorSelecionado == opcao}
                                        onChange={change}
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
                            )) : <span className={styles.price}>R$ {convertPrice(jogo[id].preco)}</span>
                    }
                    <hr/>
                    <section style={{display: "inline-flex", alignItems: "flex-end"}}>
                        <CartButton
                            id={id}
                            price={parseFloat(valorSelecionado)}
                            gamePage={true}
                            opacity={valorSelecionado == '' ? "0" : "1"}
                        />
                    </section>
                </div>
                <hr/>
            </form>
        </div>
    );
}

export default Form;