import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import Banner from "../Banner";
import styles from "./Carrossel.module.css";
import jogos from "../../json/games.json"
import FilterPlataform from "../FilterPlataform";

function Carrossel() {
    return (
        <div className={styles.div}>
            <Carousel>
                <Carousel.Item interval={6500} color="black">
                    <Banner
                        height="75vh"
                        bgposition="center"
                        bgcolor="black"
                        borderradius="5px"
                        paddingtop="0px"
                        textalign="left"
                        img={jogos[33].cover}
                    >
                        <div className={styles.gameinfo}>
                            <button className={styles.btn}>
                                <span className={styles.discount}>-50%</span>
                                <span>{jogos[10].preco}</span>
                                <i class="fa-solid fa-cart-plus"></i>
                            </button>
                            <div className={styles.plataforms}>
                                <FilterPlataform 
                                    id={jogos[18].id} 
                                    fontsize="8px"
                                />
                            </div>
                        </div>
                    </Banner>
                </Carousel.Item>
                <Carousel.Item interval={6500} color="black">
                    <Banner
                        height="75vh"
                        bgposition="center"
                        bgcolor="black"
                        borderradius="5px"
                        paddingtop="0px"
                        textalign="left"
                        img={jogos[33].cover}
                    >
                        <div className={styles.gameinfo}>
                            <button className={styles.btn}>
                                <span className={styles.discount}>-50%</span>
                                <span>{jogos[10].preco}</span>
                                <i class="fa-solid fa-cart-plus"></i>
                            </button>
                            <div className={styles.plataforms}>
                                <FilterPlataform 
                                    id={jogos[18].id} 
                                    fontsize="8px"
                                />
                            </div>
                        </div>
                    </Banner>
                </Carousel.Item>
                <Carousel.Item interval={6500} color="black">
                    <Banner
                        height="75vh"
                        bgposition="center"
                        bgcolor="black"
                        borderradius="5px"
                        paddingtop="0px"
                        textalign="left"
                        img={jogos[33].cover}
                    >
                        <div className={styles.gameinfo}>
                            <button className={styles.btn}>
                                <span className={styles.discount}>-50%</span>
                                <span>{jogos[10].preco}</span>
                                <i class="fa-solid fa-cart-plus"></i>
                            </button>
                            <div className={styles.plataforms}>
                                <FilterPlataform 
                                    id={jogos[18].id} 
                                    fontsize="8px"
                                />
                            </div>
                        </div>
                    </Banner>
                </Carousel.Item>
                <Carousel.Item interval={6500} color="black">
                    <Banner
                        height="75vh"
                        bgposition="center"
                        bgcolor="black"
                        borderradius="5px"
                        paddingtop="0px"
                        textalign="left"
                        img={jogos[33].cover}
                    >
                        <div className={styles.gameinfo}>
                            <button className={styles.btn}>
                                <span className={styles.discount}>-50%</span>
                                <span>{jogos[10].preco}</span>
                                <i class="fa-solid fa-cart-plus"></i>
                            </button>
                            <div className={styles.plataforms}>
                                <FilterPlataform 
                                    id={jogos[18].id} 
                                    fontsize="8px"
                                />
                            </div>
                        </div>
                    </Banner>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Carrossel;