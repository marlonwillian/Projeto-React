import styles from "./Game.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import jogos from "../../json/games.json";
import Form from "../../components/Form";
import { useParams } from "react-router-dom";
import GameInfo from "../../components/GameInfo";
import { useEffect, useState } from "react";
import PageNotFound from "../PageNotFound";
import Loading from "../../components/Loading";

function Game() {
    const [loading, setLoading] = useState(1)

    useEffect(() => {
        setTimeout(() => setLoading(0), 1000)
    }, []);

    const params = useParams()
    const jogo = jogos.find((jogo) => { return jogo.id === params.id })
    if(!jogo) { return <PageNotFound/>}

    return (
        <section>
            <Loading opacity={loading} height="130vh"/>
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
            <Footer color="#100f0f" />
        </section>
    );
}

export default Game;