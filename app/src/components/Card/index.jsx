import { Link } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ id, title, price, color, img }) {
  return (
    <section className={styles.section}>
      <Link className={styles.link} to={`/assistir/${id}`}>
        <div className={styles.card} style={{backgroundColor: color}}>
          <img src={img}
          alt="Capa" className={styles.cover} />
          <p className={styles.card}>{`${title}`}</p>
          <div className={styles.btn}>
            <span className={styles.carrinho}><i class="fa-solid fa-cart-plus"></i></span>
            <span className={styles.preco}>{`${price}`}</span>
          </div>
        </div> 
      </Link>
    </section>  
  );
}

export default Card;
