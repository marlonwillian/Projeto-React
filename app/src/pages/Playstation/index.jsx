import styles from "./Playstation.module.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import image from "./playstation-banner.jpg";
import jogos from "../../json/playstation.json";
import Category from "../../components/Category";
import Card from "../../components/Card";

const categories = [
    "Ultimos lançamentos e anunciados",
    "O melhor do PlayStation Studios",
    "PS Plus",
    "Gift Cards"
]

function filterCategory(id) {
    return jogos.filter(jogo => jogo.category === categories[id])
}

function Playstation() {
    return (
        <section className="styles.section">
            <Header/>
            <Banner img={image}>
                <h1><img src="https://static.vecteezy.com/system/resources/previews/024/039/109/non_2x/playstation-logo-transparent-free-png.png" alt="PlayStation" /></h1>
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

export default Playstation;