import Container from "../Container";
import GiftButton from "../GiftButton";
import styles from "./GiftCards.module.css";
import giftImage from "./img/pscards.png";
import kratos from "./img/kratos.png";
import sm from "./img/image.png";

function GiftCards({ Plataforma }) {
  return (
    <Container background="#08264f">
      <div className={styles.giftCard}>
        <hr className={styles.line}/>
        <div className={styles.description}>
          <h1>Gift Cards *Plataforma*</h1>
          <h3>Adicione saldo a sua carteira digital da *Plataforma*</h3>
        </div>
        <div className={styles.images}>
          <img src={kratos} className={styles.personagem1}/>
          <img src={giftImage} className={styles.image} />
          <img src={sm} className={styles.personagem2}/>
        </div>
        <section className={styles.gfSection}>
          <GiftButton/>
        </section>
      </div>
    </Container>
  );
}

export default GiftCards;