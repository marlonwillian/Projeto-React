import Carrossel from "../../components/Carrossel";
import Card from "../../components/Card";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Home.module.css";
import Category from "../../components/Category";
import videos from "../../json/lancamentos.json";

function Home() {
    return (
        <section className={styles.home}>
            <Header/>
            <Banner>
                <Carrossel/>
            </Banner>
            <Container>
                <Category title="Lançamentos">
                    { videos.map(video => <Card id={video.id} key={video.id} /> )}
                </Category>
            </Container>
            <Footer/>
        </section>
    );
}

export default Home;
