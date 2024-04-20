import Carrossel from "../../components/Carrossel";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Home.module.css";
import Category from "../../components/Category";
import jogos from "../../json/games.json";

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

function Home() {
    return (
        <section className={styles.home}>
            <Header console="Consoles" color="#00000000"/>
            <Banner 
                height="100vh"
                bgposition="center"
                bgcolor="black"
                img={jogos[29].bigcover}
            >
                <div 
                    className={styles.title} 
                    style={{ left: jogos[29].position, transform: `translate(-${jogos[29].position})`}}>
                    <img src="https://images.squarespace-cdn.com/content/v1/5f8c58e8028e082422fb73b5/4e776c63-9ec5-447b-885e-91fe89431db1/ff7_rebirth_W.png?format=500w"/> 
                    <button>Já Disponível</button>
                </div>
                <Container 
                    background="linear-gradient(0deg, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 65%, rgba(0,0,0,0.499124649859944) 90%, rgba(0,0,0,0.303046218487395) 95%, rgba(0,0,0,0) 100%)"
                    marginTop="58vh"
                >
                    <Carrossel/>
                </Container>
            </Banner>
            <Container paddingTop="255px">
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
