import styles from "./Form.module.css";
import jogo from "../../json/playstation.json"
import PS5 from "./img/PS5.png"
import React, { useState } from 'react';

function Form() {
    const [valorSelecionado, setValorSelecionado] = useState('');
    const plataforms = ['playstation', 'xbox', 'steam'];
    const consoles = ['PS5', 'PS4', 'Xbox Series', 'Xbox One', 'Nintendo Switch', 'PC'];
    const opcoes = ['Edição Padrão | 349,90', 'Edição Deluxe | 399,90'];
    
    const handleChange = (event) => {
        setValorSelecionado(event.target.value);
    };

    function filterPlataform(index) {
        return jogo[7].console.filter(jogo => jogo.console === consoles[index])
    }

    return (
        <div className={styles.description}>
            <h2>{jogo[7].title}</h2>
            <h5>Insomniac Games</h5>
            <form className={styles.version}>
                {filterPlataform().map(plataform => <span><img src={parseInt(plataform)} alt="" />{plataform}</span>)}
                <div>
                    {opcoes.map(opcao => (
                        <label key={opcao}>
                            <input
                                type="radio"
                                value={opcao}
                                checked={valorSelecionado === opcao}
                                onChange={handleChange}
                            />
                            {opcao}
                        </label>
                    ))}
                    {/* <h4>PS5 | Edição Padrão</h4>
                <input type="radio" id="padrao" value="padrao" checked />
                <label for>R$ 349,00</label>
                <hr />
                <h4>PS5 | Edição Digital Deluxe</h4>
                <input type="radio" id="deluxe" value="deluxe" />
                <label for="deluxe"> R$ 349,00</label> */}
                </div>
            </form>
        </div>
    );
}

export default Form;