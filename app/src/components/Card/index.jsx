import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ id, title, preco }) {
  return (
    <section className={styles.section}>
      <Link className={styles.link} to={`/assistir/${id}`}>
        <div className={styles.card}>
          <img src={`https://i.ytimg.com/vi/${id}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjiySFcj2ANPuhxMzgYaonZFtBUw`}
          alt="Capa" className={styles.cover} />
          <p className={styles.card}>{`${title}`}</p>
          <div className={styles.btn}>
            <span className={styles.carrinho}><i class="fa-solid fa-cart-plus"></i></span>
            <span className={styles.preco}>{`${preco}`}</span>
          </div>
        </div> 
      </Link>
    </section>  
  );
}

export default Card;
