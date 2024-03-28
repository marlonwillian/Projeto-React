import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ id, title }) {
  return (
    <section className={styles.section}>
      <Link className={styles.link} to={`/assistir/${id}`}>
        <div className={styles.card}>
          <img src={`https://i.ytimg.com/vi/${id}/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjiySFcj2ANPuhxMzgYaonZFtBUw`}
          alt="Capa" className={styles.cover} />
          <p className={styles.card}>{`${title}`}</p>
          <div className={styles.btn}>
            <h6>Comprar</h6>
            <h6>R$ 349,00</h6>
          </div>
        </div> 
      </Link>
    </section>  
  );
}

export default Card;
