import Carrossel from "../../components/Carrossel";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import styles from "./Home.module.css";

function Home() {
    return (
        <section className={styles.home}>
            <Header/>
            <Container>
                <Carrossel/>
            </Container>
            <Footer/>
        </section>
    );
}

export default Home;
