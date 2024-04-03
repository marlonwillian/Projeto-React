import styles from "./Nintendo.module.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
// import image from "./playstation-banner.jpg";
import jogos from "../../json/playstation.json";
import Category from "../../components/Category";
import Card from "../../components/Card";

const categories = [
    "O melhor do PlayStation Studios",
    "Ultimos lançamentos e anunciados",
    "PS Plus",
    "Gift Cards"
]

function filterCategory(id) {
    return jogos.filter(jogo => jogo.category === categories[id])
}

function Nintendo() {
    return (
        <section className="styles.section">
            <Header console="Nintendo" color="red"/>
            <Banner>
                <h1>Nintendo</h1>
            </Banner>
            <Container>
                { categories.map((category, index) =>
                    <Category title={category} category={category} key={index} >
                        {filterCategory(index).map(jogo => <Card title={jogo.title} id={jogo.id} key={jogo.id} />)}
                    </Category>
                )}
            </Container>
            <Footer/>
        </section>
    )
}

export default Nintendo;