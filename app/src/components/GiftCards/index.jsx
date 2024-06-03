import Container from "../Container";
import GiftButton from "../GiftButton";
import CartButton from "../CartButton";
import styles from "./GiftCards.module.css";
import giftImage from "./img/pscards.png";
import kratos from "./img/kratos.png";
import sm from "./img/image.png";
import jogos from "../../json/games.json";
import { convertPrice } from "../CartButton";
import { useEffect, useState } from "react";

function GiftCards({ plataform }) {
  const [selectedPrice, setPrice] = useState("")

  function selectPrice(id, price) {
    setPrice([id, price])
  }

  return (
    <Container background="black" paddingBottom="100px">
      <div className={styles.giftCard}>
        <hr className={styles.line} />
        <div className={styles.description}>
          <h1>Gift Cards {plataform}™</h1>
          <h3>Adicione saldo a sua carteira digital da {plataform}.</h3>
        </div>
        <div className={styles.images}>
          <img src={kratos} className={styles.personagem1} />
          <img src={giftImage} className={styles.gifts} />
          <img src={sm} className={styles.personagem2} />
        </div>
        <section id="Gift-Cards" className={styles.gfSection} style={{ height: selectedPrice == '' ? "290px" : "380px" }}>
          {
            jogos.map(
              (jogo) => plataform === jogo.plataform ?
                <div
                  className={styles.price}
                  onClick={() => selectPrice(jogo.id, jogo.preco)}
                  style={{
                    backgroundColor: jogo.preco == selectedPrice[1] ? "white" : null,
                    color: jogo.preco == selectedPrice[1] ? "#08459a" : null
                  }}
                >
                  R$ {convertPrice(jogo.preco)}
                </div> : null
            )
          }
          <CartButton
            id={selectedPrice[0]}
            price={selectedPrice[1]}
            gamePage={true}
            margintop="50px"
            opacity={
              selectedPrice == "" ? 0 : 1
            }
          />
        </section>
      </div>
    </Container>
  );
}

export default GiftCards;