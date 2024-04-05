import styles from "./Game.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import jogo from "../../json/playstation.json";

function Game() {
    return (
        <section>
            <Header console="Consoles" color="transparent"/>
            <Banner img={jogo[8].cover}>
            </Banner>
            <Footer color="black"/>
        </section>
    );
}

export default Game;