import styles from "./Game.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import jogo from "../../json/playstation.json";
import Form from "../../components/Form";

function Game() {
    return (
        <section>
            <Header console="Consoles" color="transparent" shadow="none"/>
            <Banner 
                img={jogo[7].bigcover} 
                height="150vh"
                bgposition="left"
                margintop="-100px"
            >
                <Form/>
            </Banner>
            <Footer color="black"/>
        </section>
    );
}

export default Game;