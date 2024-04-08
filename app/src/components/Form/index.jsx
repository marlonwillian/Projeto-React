import styles from "./Form.module.css";
import jogo from "../../json/playstation.json"

function Form() {
    return (
        <div className={styles.description}>
            <h2>{jogo[7].title}</h2>
            <h5>Insomniac Games</h5>
            <form className={styles.version}>
                <div>
                    <h4>PS5 | Edição Padrão</h4>
                    <input type="radio" id="padrao" value="padrao" checked />
                    <label for>R$ 349,00</label>
                    <hr />
                    <h4>PS5 | Edição Digital Deluxe</h4>
                    <input type="radio" id="deluxe" value="deluxe" />
                    <label for="deluxe"> R$ 349,00</label>
                </div>
            </form>
        </div>
    );
}

export default Form;