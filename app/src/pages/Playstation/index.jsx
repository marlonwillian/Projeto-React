import styles from "./Playstation.module.css";
import Header from "../../components/Header";
import Banner from "../../components/Banner";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import jogos from "../../json/games.json";
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
            <Header console={<i class="fa-brands fa-playstation"></i>} color="#08459a" shadow="#000000fe 5px 3px 8px"/>
            <Banner 
                img="https://preview.redd.it/the-new-playstation-studios-banner-who-can-spot-dreams-v0-nsy12gkrmdt81.jpg?auto=webp&s=66d3a29499ae8e4659ce4e0d0b34c7b69bed1d5a"
                height="105vh"
                
            >
                <h1 className={styles.title}><span class="fa-brands fa-playstation"></span> PlayStation</h1>
            </Banner>
            <Container background="#08264f">
                { categories.map((category, index) =>
                    <Category title={category} category={category} key={index} >
                        {filterCategory(index).map(jogo => <Card title={jogo.title} id={jogo.id} price={jogo.preco} color="#061a36" img={jogo.cover} key={jogo.id} />)}
                    </Category>
                )}
            </Container>
            <Footer color="#08459a"/>
        </section>
    )
}

export default Playstation;