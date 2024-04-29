import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Banner from "../Banner";
import styles from "./Carrossel.module.css";
import jogos from "../../json/games.json"
import FilterPlataform from "../FilterPlataform";
import CartButton from "../CartButton";
import { Link } from "react-router-dom";

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min 
}

function convertPrice(price) {
    price = price.toLocaleString('pt-br', {minimumFractionDigits: 2});
    return price
}

const number = [getRandomInt(0, 44), getRandomInt(0, 44), getRandomInt(0, 44),getRandomInt(0, 44)];

function Carrossel() {
    return (
        <div className={styles.div}>
            <Carousel>
                <Carousel.Item interval={6500} color="black">
                    <Link className={styles.link} to={`/jogo/${jogos[number[0]].id}`}>
                        <Banner
                            height="75vh"
                            bgposition="center"
                            bgcolor="black"
                            borderradius="5px"
                            paddingtop="0px"
                            textalign="left"
                            img={jogos[number[0]].cover}
                        >
                            <div className={styles.gameinfo}>
                                <i className={styles.btn}>
                                    <CartButton
                                        margintop="480px"
                                        marginleft="50px"
                                        price={typeof(jogos[number[0]].preco) == "object"
                                            ? convertPrice(jogos[number[0]].preco[0]) : convertPrice(jogos.preco)}
                                        discount={jogos[number[0]].discount}/>
                                </i>
                                <div className={styles.plataforms}>
                                    <FilterPlataform
                                        id={jogos[number[0]].id}
                                        fontsize="8px"
                                        onlylogo="true"
                                        nintendosize="20px"
                                        steamsize="20px"
                                    />
                                </div>
                            </div>
                        </Banner>
                    </Link>
                </Carousel.Item>
                <Carousel.Item interval={6500} color="black">
                    <Link className={styles.link} to={`/jogo/${jogos[number[1]].id}`}>
                        <Banner
                            height="75vh"
                            bgposition="center"
                            bgcolor="black"
                            borderradius="5px"
                            paddingtop="0px"
                            textalign="left"
                            img={jogos[number[1]].cover}
                        >
                            <div className={styles.gameinfo}>
                                <i className={styles.btn}>
                                    <CartButton
                                        margintop="480px"
                                        marginleft="50px"
                                        price={typeof(jogos[number[1]].preco) == "object"
                                            ? convertPrice(jogos[number[1]].preco[0]) : convertPrice(jogos[number[1]].preco)}
                                        discount={jogos[number[1]].discount}/>
                                </i>
                                <div className={styles.plataforms}>
                                    <FilterPlataform
                                        id={jogos[number[1]].id}
                                        fontsize="8px"
                                        onlylogo="true"
                                        nintendosize="20px"
                                        steamsize="20px"
                                    />
                                </div>
                            </div>
                        </Banner>
                    </Link>
                </Carousel.Item>
                <Carousel.Item interval={6500} color="black">
                    <Link className={styles.link} to={`/jogo/${jogos[number[2]].id}`}>
                        <Banner
                            height="75vh"
                            bgposition="center"
                            bgcolor="black"
                            borderradius="5px"
                            paddingtop="0px"
                            textalign="left"
                            img={jogos[number[2]].cover}
                        >
                            <div className={styles.gameinfo}>
                                <i className={styles.btn}>
                                    <CartButton
                                        margintop="480px"
                                        marginleft="50px"
                                        price={typeof(jogos[number[2]].preco) == "object"
                                            ? convertPrice(jogos[number[2]].preco[0]) : convertPrice(jogos[number[2]].preco)}
                                        discount={jogos[number[2]].discount}/>
                                </i>
                                <div className={styles.plataforms}>
                                    <FilterPlataform
                                        id={jogos[number[2]].id}
                                        fontsize="8px"
                                        onlylogo="true"
                                        nintendosize="20px"
                                        steamsize="20px"
                                    />
                                </div>
                            </div>
                        </Banner>
                    </Link>
                </Carousel.Item>
                <Carousel.Item interval={6500} color="black">
                    <Link className={styles.link} to={`/jogo/${jogos[number[3]].id}`}>
                        <Banner
                            height="75vh"
                            bgposition="center"
                            bgcolor="black"
                            borderradius="5px"
                            paddingtop="0px"
                            textalign="left"
                            img={jogos[number[3]].cover}
                        >
                            <div className={styles.gameinfo}>
                                <i className={styles.btn}>
                                    <CartButton
                                        margintop="480px"
                                        marginleft="50px"
                                        price={typeof(jogos[number[3]].preco) == "object"
                                            ? convertPrice(jogos[number[3]].preco[0]) : convertPrice(jogos[number[3]].preco)}
                                        discount={jogos[number[3]].discount}/>
                                </i>
                                <div className={styles.plataforms}>
                                    <FilterPlataform
                                        id={jogos[number[3]].id}
                                        fontsize="8px"
                                        onlylogo="true"
                                        nintendosize="20px"
                                        steamsize="20px"
                                    />
                                </div>
                            </div>
                        </Banner>
                    </Link>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carrossel;