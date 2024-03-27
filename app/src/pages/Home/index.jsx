import Carrossel from "../../components/Carrossel";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Home.module.css";
import Category from "../../components/Category";
import jogos from "../../json/jogos.json";
import Menu from "../../components/Menu";

const categories = [
    "Lançamentos",
    "Rockstar Games",
    "Ubisoft",
    "EA",
    "Capcom",
    "From Software"
]

function filterCategory(id) {
    return jogos.filter(jogo => jogo.category === categories[id])
}

function Home() {
    return (
        <section className={styles.home}>
            <Header />
            {/* <Menu>
                <h1>Menu</h1>
            </Menu> */}
            <Banner>
                <Carrossel />
            </Banner>
            <Container>
                { categories.map((category, index) =>
                    <Category title={category} category={category} key={index} >
                        {filterCategory(index).map(jogo => <Card id={jogo.id} key={jogo.id} />)}
                    </Category>
                )}
            </Container>
            <Footer />
        </section>
    );
}

export default Home;
