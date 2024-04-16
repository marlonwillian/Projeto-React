import Carrossel from "../../components/Carrossel";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Home.module.css";
import Category from "../../components/Category";
import jogos from "../../json/home.json";
import Menu from "../../components/Menu";

const categories = [
    "Lançamentos e anunciados",
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
            <Header console="Consoles" color="black"/>
            <Banner 
                height="90vh"
                bgposition="center"
                img={"https://www.notebookcheck.info/fileadmin/Notebooks/News/_nc4/shadow-of-the-erdtree.jpg"}>
                <Carrossel />
            </Banner>
            <Container>
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
