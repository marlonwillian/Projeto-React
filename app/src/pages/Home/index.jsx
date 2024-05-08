import Carrossel from "../../components/Carrossel";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Home.module.css";
import Category from "../../components/Category";
import jogos from "../../json/games.json";
import SearchGames from "../../components/SearchGames";
import { Link } from "react-router-dom";
import SearchCard from "../../components/SearchCard";

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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min 
}

function convertPrice(price) {
    price = price.toLocaleString('pt-br', {minimumFractionDigits: 2});
    return price
}

const number = getRandomInt(0, 54);

function Home() {
    return (
        <section className={styles.home}>
            <Header console="Consoles"/>
            <Banner 
                height="100vh"
                bgposition="center"
                bgcolor="black"
                img={jogos[69].bigcover}
            >
                <div 
                    className={styles.title} 
                    style={{ 
                        left: jogos[69].position, 
                        transform: `translate(-${jogos[69].position})`
                    }}>
                    <img 
                        src={jogos[69].imgTitle} 
                        style={{ width: "350px" }}
                    /> 
                    <Link to={`/jogo/${number}`}>
                        <button className={styles.button}>
                            {
                                typeof(jogos[number].preco) == "string" ? 
                                "Em breve" : "Já disponível" 
                            }
                        </button>
                    </Link>
                </div>
                <Container 
                    background="linear-gradient(0deg, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 65%, rgba(0, 0, 0, 0.740) 90%, rgba(0, 0, 0, 0.450) 95%, rgba(0,0,0,0) 100%)"
                    marginTop="60vh"
                >
                    <Carrossel/>
                </Container>
            </Banner>
            <Container paddingTop="360px" background="black">48                { categories.map((category, index) =>
                    <Category 
                        title={category} 
                        category={category} 
                        key={index} 
                    >
                        {
                            filterCategory(index).map(jogo => 
                                <Card 
                                    title={jogo.title} 
                                    id={jogo.id} 
                                    price={
                                        typeof(jogo.preco) == "object" 
                                        ? jogo.preco[0] : jogo.preco
                                    }
                                    discount={jogo.discount}
                                    color="#061a36" 
                                    img={jogo.cover} 
                                    key={jogo.id} 
                                />
                            )
                        }
                    </Category>
                )}
            </Container>
            <Footer color="black"/>
        </section>
    );
}

export default Home;
