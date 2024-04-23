import Carrossel from "../../components/Carrossel";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Home.module.css";
import Category from "../../components/Category";
import jogos from "../../json/games.json";
import { Link } from "react-router-dom";

const categories = [
    "Lançamentos e anunciados",
    "Rockstar Games",
    "From Software",
    "Ubisoft",
    "EA",
    "Capcom"
]

function filterCategory(id) {
    return jogos.filter(jogo => jogo.category === categories[id])
}

function getRandomInt (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min 
}

const number = getRandomInt(0, 44);

function Home() {
    return (
        <section className={styles.home}>
            <Header console="Consoles"/>
            <Banner 
                height="100vh"
                bgposition="center"
                bgcolor="black"
                img={jogos[number].bigcover}
            >
                <div 
                    className={styles.title} 
                    style={{ left: jogos[number].position, transform: `translate(-${jogos[number].position})`}}>
                    <img src={jogos[number].imgTitle} style={{ width: "350px" }}/> 
                    <Link to={`/jogo/${number}`}><button className={styles.button}>{typeof(jogos[number].preco) == "string" ? "Em breve" : "Já disponível" }</button></Link>
                </div>
                <Container 
                    background="linear-gradient(0deg, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 65%, rgba(0, 0, 0, 0.740) 90%, rgba(0, 0, 0, 0.450) 95%, rgba(0,0,0,0) 100%)"
                    marginTop="58vh"
                >
                    <Carrossel/>
                </Container>
            </Banner>
            <Container paddingTop="255px" background="black">
                { categories.map((category, index) =>
                    <Category title={category} category={category} key={index} >
                        {filterCategory(index).map(jogo => <Card title={jogo.title} id={jogo.id} price={jogo.preco} color="#061a36" img={jogo.cover} key={jogo.id} />)}
                    </Category>
                )}
            </Container>
            <Footer color="black"/>
        </section>
    );
}

export default Home;
