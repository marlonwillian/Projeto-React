import styles from "./PC.module.css";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";

function PC() {
    return (
        <section>
            <Header console="Consoles"/>
            <Banner>

            </Banner>
            <Container background="black">
            </Container>
            <Footer color="#100f0f"/>
        </section>
    );
}

export default PC;