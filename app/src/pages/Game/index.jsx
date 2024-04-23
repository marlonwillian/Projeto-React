import styles from "./Game.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import jogos from "../../json/games.json";
import Form from "../../components/Form";
import { useParams } from "react-router-dom";

function Game() {
    const params = useParams()
    const jogo = jogos.find((jogo) => { return jogo.id === params.id })
    console.log(jogo.id)
    // if(!video) { return <PageNotFound/>}

    return (
        <section>
            <Header console="Consoles" shadow="none"/>
            <Banner 
                img={jogos[jogo.id].bigcover} 
                height="150vh"
                bgposition="left"
                margintop="-100px"
            >
                <Form id={jogo.id}/>
            </Banner>
            <Footer color="black"/>
        </section>
    );
}

export default Game;