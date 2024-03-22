import Carrossel from "../../components/Carrossel";
import Container from "../../components/Container";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Home.module.css";

function Home() {
    return (
        <section className={styles.home}>
            <Header/>
            <Banner>
                <Carrossel/>
            </Banner>
            <Container>
                <h1>Teste</h1>
            </Container>
            <Footer/>
        </section>
    );
}

export default Home;
