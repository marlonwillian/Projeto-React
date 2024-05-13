import styles from "./Game.module.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import jogos from "../../json/games.json";
import Form from "../../components/Form";
import { useParams } from "react-router-dom";
import dez from "./img/10.png";
import doze from "./img/12.png";
import quatorze from "./img/14.png";
import dezeseis from "./img/16.png";
import dezoito from "./img/18.png";
import livre from "./img/livre.png";

function Game() {
    const params = useParams()
    const jogo = jogos.find((jogo) => { return jogo.id === params.id })
    // if(!video) { return <PageNotFound/>}

    const ratingsImages = {
        "dez": dez,
        "doze": doze,
        "quatorze": quatorze,
        "dezeseis": dezeseis,
        "dezoito": dezoito,
        "livre": livre
    };

    const image = ratingsImages[jogo.rating];

    return (
        <section>
            <Header console="Consoles" shadow="none" />
            <Banner
                img={jogos[jogo.id].bigcover}
                height="150vh"
                bgposition="left"
                margintop="-100px"
            >
                <Form id={jogo.id} />
                <section className={styles.gameInfo}>
                    <div className={styles.gameDetails}>
                        <span
                            className={styles.age}
                        >
                            <img src={image} style={{ width: "70px" }} />
                        </span><br />
                        <span>
                            <i
                                class="fa-solid fa-microphone-lines"
                                style={{ marginRight: "21px" }}
                            ></i>
                            Voz em PT-BR:
                            <span style={{ marginLeft: "84px" }}>{jogo.info[0]}</span>
                            <br />
                        </span>
                        <span>
                            <i
                                class="fa-solid fa-closed-captioning"
                                style={{ marginRight: "14px" }}
                            ></i>
                            Legendas em PT-BR:
                            <span style={{ marginLeft: "32px" }}>{jogo.info[1]}</span>
                            <br />
                        </span>
                        <span>
                            <i
                                class="fa-solid fa-gamepad"
                                style={{ marginRight: "11px" }}
                            ></i>
                            Gêneros:
                            <span style={{ marginLeft: "133px" }}>{jogo.info[2]}</span></span>
                        <br />
                        <span>
                            <i
                                class="fa-solid fa-calendar-check"
                                style={{ marginRight: "19px" }}
                            >
                            </i>
                            Lançamento:
                            <span style={{ marginLeft: "97px" }}>{jogo.info[3]}</span>
                        </span>
                    </div>
                    <div className={styles.rightInfo}>
                        {
                            jogo.online == "2" ?
                                <div className={styles.onlineInfo}>
                                    <span styles={{ paddingBottom: "1px" }}>1 Jogador</span>
                                    <hr className={styles.linha} />
                                    <span>Jogo Online</span>
                                </div>
                            : jogo.online == "3" ?
                                <div className={styles.onlineInfo}>
                                    <span styles={{ paddingBottom: "1px" }}>
                                        1 Jogador/Cooperativo
                                    </span>
                                    <hr className={styles.linha} />
                                    <span>Jogo Online</span>
                                </div>
                            : <div className={styles.onlineInfo}>
                                <span styles={{ paddingBottom: "1px" }}>{jogo.online}</span>
                            </div>
                        }
                    </div>
                </section>
            </Banner>
            <Footer color="black" />
        </section>
    );
}

export default Game;