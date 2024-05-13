import styles from "./Form.module.css";
import jogo from "../../json/games.json"
import FilterPlataform from "../FilterPlataform";
import React, { useState } from 'react';

function Form({ id }) {
    const [valorSelecionado, setValorSelecionado] = useState('');
    const opcoes = jogo[id].preco;
    console.log(typeof(opcoes))
    
    const handleChange = (event) => {
        setValorSelecionado(event.target.value);
    };

    return (
        <div className={styles.description}>
            <h2>{jogo[parseInt(id)].title}</h2>
            <h5>{jogo[parseInt(id)].developer}</h5>
            <form className={styles.edition}>
                <FilterPlataform id={id} fontsize="13px"/>
                <div>
                    <hr/>
                    {
                        typeof(opcoes) == "object" ?
                            opcoes.map(opcao => (
                                <label key={opcao} checked>
                                    <input
                                        type="radio"
                                        value={opcao}
                                        checked={valorSelecionado === opcao}
                                        onChange={handleChange}
                                    />
                                    {opcao}
                                </label> 
                            )) : <span className={styles.price}>{jogo[id].preco}</span>
                    }
                    <hr/>
                    <button type="submit" className={styles.submitButton}>
                        Adicionar ao carrinho
                    </button>
                </div>
            </form>
            {console.log(parseInt(id))}
        </div>
    );
}

export default Form;