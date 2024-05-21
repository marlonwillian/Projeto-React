import styles from "./Game.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import jogos from "../../json/games.json";
import Form from "../../components/Form";
import { useParams } from "react-router-dom";

import GameInfo from "../../components/GameInfo";

function Game() {
    const params = useParams()
    const jogo = jogos.find((jogo) => { return jogo.id === params.id })
    // if(!video) { return <PageNotFound/>}

    console.log(typeof(jogos[jogo.id].price))

    return (
        <section>
            <Header console="Consoles" shadow="none" />
            <Banner
                img={jogos[jogo.id].bigcover}
                height={
                    typeof(jogos[jogo.id].preco) == "number" ? "114vh" : "150vh"
                }
                bgposition="left"
                margintop="-100px"
            >
                <Form id={jogo.id} />
                <GameInfo id={jogo.id}/>
            </Banner>
            <Footer color="black" />
        </section>
    );
}

export default Game;