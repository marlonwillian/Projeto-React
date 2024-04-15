import styles from "./Form.module.css";
import jogo from "../../json/playstation.json"
import FilterPlataform from "../FilterPlataform";
import React, { useState } from 'react';

function Form(id) {
    const [valorSelecionado, setValorSelecionado] = useState('');
    const opcoes = ['Edição Padrão | R$ 349,90', 'Edição Deluxe | R$ 399,90'];
    
    const handleChange = (event) => {
        setValorSelecionado(event.target.value);
    };

    return (
        <div className={styles.description}>
            <h2>{jogo[0].title}</h2>
            <h5>Insomniac Games</h5>
            <form className={styles.edition}>
                {/* <FilterPlataform id={id} fontsize="13px"/> */}
                <div>
                    <hr/>
                    {opcoes.map(opcao => (
                        <label key={opcao} checked>
                            <input
                                type="radio"
                                value={opcao}
                                checked={valorSelecionado === opcao}
                                onChange={handleChange}
                            />
                            {opcao}
                        </label>
                    ))}
                    <hr/>
                    <button type="submit">Adicionar ao carrinho</button>
                </div>
            </form>
            {console.log(parseInt(id))}
        </div>
    );
}

export default Form;